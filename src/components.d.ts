/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ExampleComponent {
        "exampleProp": string;
        "exampleToUpperCase": () => Promise<void>;
    }
    interface JplantsSlider {
        "showStatus": boolean;
    }
}
declare global {
    interface HTMLExampleComponentElement extends Components.ExampleComponent, HTMLStencilElement {
    }
    var HTMLExampleComponentElement: {
        prototype: HTMLExampleComponentElement;
        new (): HTMLExampleComponentElement;
    };
    interface HTMLJplantsSliderElement extends Components.JplantsSlider, HTMLStencilElement {
    }
    var HTMLJplantsSliderElement: {
        prototype: HTMLJplantsSliderElement;
        new (): HTMLJplantsSliderElement;
    };
    interface HTMLElementTagNameMap {
        "example-component": HTMLExampleComponentElement;
        "jplants-slider": HTMLJplantsSliderElement;
    }
}
declare namespace LocalJSX {
    interface ExampleComponent {
        "exampleProp"?: string;
        "onExampleEvent"?: (event: CustomEvent<string>) => void;
    }
    interface JplantsSlider {
        "showStatus"?: boolean;
    }
    interface IntrinsicElements {
        "example-component": ExampleComponent;
        "jplants-slider": JplantsSlider;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "example-component": LocalJSX.ExampleComponent & JSXBase.HTMLAttributes<HTMLExampleComponentElement>;
            "jplants-slider": LocalJSX.JplantsSlider & JSXBase.HTMLAttributes<HTMLJplantsSliderElement>;
        }
    }
}
