import { classMap, lit, html } from '../lib/lit';
import { dispatch } from 'hybrids';
import { selectAll } from '../lib/util';
// Figure out how to set initial checked state
const styles = html `
    <style>
        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 2px;
        }

        ue-button {
            width: inherit;
        }

        .left {
            --btn-justify-content: left;
        }
    </style>
`;
const properties = {
    buttons: [],
    checkable: false,
    singlecheck: false,
    items: host => selectAll('ue-button', host.shadowRoot),
    checkedItems: {
        get: ({ items }) => items.filter((btn) => btn.checked).map((btn) => btn.index),
        set: ({ items }, value) => {
            items.forEach((btn, index) => {
                btn.checked = value.includes(index);
            });
            return value;
        }
    },
    left: false
};
const template = host => {
    const { buttons, left, checkable, singlecheck } = host;
    return html `
        ${styles}
        ${buttons.map(({ label, disabled }, index) => html `
                    <ue-button
                        class=${classMap({ left })}
                        .index=${index}
                        .checkable=${checkable}
                        .disabled=${disabled}
                        @click=${({ target }) => {
        const opts = {
            bubbles: true,
            composed: true,
            detail: Object.assign(Object.assign({}, target), { label })
        };
        dispatch(host, 'buttonclick', opts);
        if (singlecheck)
            host.checkedItems = [index];
    }}
                        ><ue-text .innerHTML=${label}></ue-text
                    ></ue-button>
                `)}
    `;
};
export default Object.assign(Object.assign({}, properties), { render: lit(template) });
//# sourceMappingURL=ue-button-grp.js.map