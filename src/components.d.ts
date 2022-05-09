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
    interface JplantArticle {
        "articleImage": string;
        "articleText": string;
        "articleTitle": string;
    }
    interface JplantsButton {
        "buttonColor": string;
        "buttonHref": string;
        "buttonIconClass": string;
        "buttonName": string;
    }
    interface JplantsHeader {
        "logo": string;
        "logoHref": string;
        "navLinksJson": string;
    }
    interface JplantsMenubar {
        "navItemsLinks": string;
    }
    interface JplantsRatingStars {
        "starArray": string[];
        "starNumber": number;
    }
}
declare global {
    interface HTMLExampleComponentElement extends Components.ExampleComponent, HTMLStencilElement {
    }
    var HTMLExampleComponentElement: {
        prototype: HTMLExampleComponentElement;
        new (): HTMLExampleComponentElement;
    };
    interface HTMLJplantArticleElement extends Components.JplantArticle, HTMLStencilElement {
    }
    var HTMLJplantArticleElement: {
        prototype: HTMLJplantArticleElement;
        new (): HTMLJplantArticleElement;
    };
    interface HTMLJplantsButtonElement extends Components.JplantsButton, HTMLStencilElement {
    }
    var HTMLJplantsButtonElement: {
        prototype: HTMLJplantsButtonElement;
        new (): HTMLJplantsButtonElement;
    };
    interface HTMLJplantsHeaderElement extends Components.JplantsHeader, HTMLStencilElement {
    }
    var HTMLJplantsHeaderElement: {
        prototype: HTMLJplantsHeaderElement;
        new (): HTMLJplantsHeaderElement;
    };
    interface HTMLJplantsMenubarElement extends Components.JplantsMenubar, HTMLStencilElement {
    }
    var HTMLJplantsMenubarElement: {
        prototype: HTMLJplantsMenubarElement;
        new (): HTMLJplantsMenubarElement;
    };
    interface HTMLJplantsRatingStarsElement extends Components.JplantsRatingStars, HTMLStencilElement {
    }
    var HTMLJplantsRatingStarsElement: {
        prototype: HTMLJplantsRatingStarsElement;
        new (): HTMLJplantsRatingStarsElement;
    };
    interface HTMLElementTagNameMap {
        "example-component": HTMLExampleComponentElement;
        "jplant-article": HTMLJplantArticleElement;
        "jplants-button": HTMLJplantsButtonElement;
        "jplants-header": HTMLJplantsHeaderElement;
        "jplants-menubar": HTMLJplantsMenubarElement;
        "jplants-rating-stars": HTMLJplantsRatingStarsElement;
    }
}
declare namespace LocalJSX {
    interface ExampleComponent {
        "exampleProp"?: string;
        "onExampleEvent"?: (event: CustomEvent<string>) => void;
    }
    interface JplantArticle {
        "articleImage"?: string;
        "articleText"?: string;
        "articleTitle"?: string;
    }
    interface JplantsButton {
        "buttonColor"?: string;
        "buttonHref"?: string;
        "buttonIconClass"?: string;
        "buttonName"?: string;
    }
    interface JplantsHeader {
        "logo"?: string;
        "logoHref"?: string;
        "navLinksJson"?: string;
    }
    interface JplantsMenubar {
        "navItemsLinks"?: string;
        "onOnShow"?: (event: CustomEvent<any>) => void;
    }
    interface JplantsRatingStars {
        "onOnShow"?: (event: CustomEvent<any>) => void;
        "starArray"?: string[];
        "starNumber"?: number;
    }
    interface IntrinsicElements {
        "example-component": ExampleComponent;
        "jplant-article": JplantArticle;
        "jplants-button": JplantsButton;
        "jplants-header": JplantsHeader;
        "jplants-menubar": JplantsMenubar;
        "jplants-rating-stars": JplantsRatingStars;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "example-component": LocalJSX.ExampleComponent & JSXBase.HTMLAttributes<HTMLExampleComponentElement>;
            "jplant-article": LocalJSX.JplantArticle & JSXBase.HTMLAttributes<HTMLJplantArticleElement>;
            "jplants-button": LocalJSX.JplantsButton & JSXBase.HTMLAttributes<HTMLJplantsButtonElement>;
            "jplants-header": LocalJSX.JplantsHeader & JSXBase.HTMLAttributes<HTMLJplantsHeaderElement>;
            "jplants-menubar": LocalJSX.JplantsMenubar & JSXBase.HTMLAttributes<HTMLJplantsMenubarElement>;
            "jplants-rating-stars": LocalJSX.JplantsRatingStars & JSXBase.HTMLAttributes<HTMLJplantsRatingStarsElement>;
        }
    }
}
