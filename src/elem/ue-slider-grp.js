import { html, lit } from '../lib/lit';
const styles = html `
    <style>
        #group {
            display: flex;
            flex-direction: column;
            padding: 2px;
            justify-content: center;
            width: inherit;
        }
        ue-slider {
            margin-bottom: 8px;
        }
    </style>
`;
const properties = { name: '', data: [] };
const template = (host) => html `
    ${styles}
    <div id="group">
        ${host.data.map(({ label, min, max, step, value, defaultValue }, index) => html `
                    <ue-slider-widget
                        .label=${label}
                        .min=${min || 0}
                        .max=${max || 100}
                        .step=${step || 1}
                        .value=${value || 0}
                        .defaultValue=${defaultValue || 0}
                        @change=${e => {
    const { label, defaultValue } = e.target;
    Object.assign(e.detail, {
        index,
        label,
        defaultValue
    });
}}
                    ></ue-slider-widget>
                `)}
    </div>
`;
export default Object.assign(Object.assign({}, properties), { render: lit(template) });
//# sourceMappingURL=ue-slider-grp.js.map