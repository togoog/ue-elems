// Generated by dts-bundle v0.7.3

declare module 'ue-elems' {
    export * from 'ue-elems/elem';
}

declare module 'ue-elems/elem' {
    import UeText from 'ue-elems/elem/ue-text';
    import UeButton from 'ue-elems/elem/ue-button';
    import UeButtonGrp from 'ue-elems/elem/ue-button-grp';
    import UeSlider from 'ue-elems/elem/ue-slider';
    import UeSliderGroup from 'ue-elems/elem/ue-slider-group';
    import UeSliderWidget from 'ue-elems/elem/ue-slider-widget';
    import UeIcon from 'ue-elems/elem/ue-icon';
    export { UeButton, UeButtonGrp, UeIcon, UeSlider, UeSliderGroup, UeSliderWidget, UeText };
}

declare module 'ue-elems/elem/ue-text' {
    const _default: {
        render: (host: any) => (host: any, target: any) => void;
        slotHTML: {
            get: (host: any) => any;
            connect: (host: any, key: any, invalidate: any) => void;
        };
    };
    export default _default;
}

declare module 'ue-elems/elem/ue-button' {
    const _default: {
        render: (host: any) => (host: any, target: any) => void;
        active: boolean;
        checkable: boolean;
        checked: boolean;
        clickable: boolean;
        disabled: boolean;
        focused: boolean;
    };
    export default _default;
}

declare module 'ue-elems/elem/ue-button-grp' {
    const _default: {
        render: (host: any) => (host: any, target: any) => void;
        buttons: any[];
        checkable: boolean;
        singlecheck: boolean;
        items: (host: any) => Element[];
        checkedItems: {
            get: ({ items }: {
                items: any;
            }) => any[];
            set: ({ items }: {
                items: any;
            }, value: number[]) => number[];
        };
        left: boolean;
    };
    export default _default;
}

declare module 'ue-elems/elem/ue-slider' {
    const _default: {
        render: (host: any) => (host: any, target: any) => void;
        min: number;
        max: number;
        step: number;
        value: {
            get: (host: any, lastValue: any) => any;
            set: ({ step }: {
                step: any;
            }, value: any) => any;
            observe: (host: any, value: any, lastValue: any) => void;
        };
    };
    export default _default;
}

declare module 'ue-elems/elem/ue-slider-group' {
    const _default: {
        render: (host: any) => (host: any, target: any) => void;
        label: string;
        min: number;
        max: number;
        step: number;
        axislabels: string[];
        values: any[];
        defaultValues: any[];
    };
    export default _default;
}

declare module 'ue-elems/elem/ue-slider-widget' {
    const _default: {
        render: (host: any) => (host: any, target: any) => void;
        label: string;
        min: number;
        max: number;
        step: number;
        value: number;
        defaultValue: number;
    };
    export default _default;
}

declare module 'ue-elems/elem/ue-icon' {
    const _default: {
        render: (host: any) => (host: any, target: any) => void;
        border: number;
        shape: string;
        size: string;
    };
    export default _default;
}

