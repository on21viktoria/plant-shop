/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
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
    interface JplantsList {
        "title": string;
    }
    interface JplantsListitem {
        "icon"?: string;
        "listText": string;
    }
    interface JplantsMenubar {
        "navItemsLinks": string;
    }
}
declare global {
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
    interface HTMLJplantsListElement extends Components.JplantsList, HTMLStencilElement {
    }
    var HTMLJplantsListElement: {
        prototype: HTMLJplantsListElement;
        new (): HTMLJplantsListElement;
    };
    interface HTMLJplantsListitemElement extends Components.JplantsListitem, HTMLStencilElement {
    }
    var HTMLJplantsListitemElement: {
        prototype: HTMLJplantsListitemElement;
        new (): HTMLJplantsListitemElement;
    };
    interface HTMLJplantsMenubarElement extends Components.JplantsMenubar, HTMLStencilElement {
    }
    var HTMLJplantsMenubarElement: {
        prototype: HTMLJplantsMenubarElement;
        new (): HTMLJplantsMenubarElement;
    };
    interface HTMLElementTagNameMap {
        "jplant-article": HTMLJplantArticleElement;
        "jplants-button": HTMLJplantsButtonElement;
        "jplants-header": HTMLJplantsHeaderElement;
        "jplants-list": HTMLJplantsListElement;
        "jplants-listitem": HTMLJplantsListitemElement;
        "jplants-menubar": HTMLJplantsMenubarElement;
    }
}
declare namespace LocalJSX {
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
    interface JplantsList {
        "title"?: string;
    }
    interface JplantsListitem {
        "icon"?: string;
        "listText"?: string;
    }
    interface JplantsMenubar {
        "navItemsLinks"?: string;
        "onOnShow"?: (event: CustomEvent<any>) => void;
    }
    interface IntrinsicElements {
        "jplant-article": JplantArticle;
        "jplants-button": JplantsButton;
        "jplants-header": JplantsHeader;
        "jplants-list": JplantsList;
        "jplants-listitem": JplantsListitem;
        "jplants-menubar": JplantsMenubar;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "jplant-article": LocalJSX.JplantArticle & JSXBase.HTMLAttributes<HTMLJplantArticleElement>;
            "jplants-button": LocalJSX.JplantsButton & JSXBase.HTMLAttributes<HTMLJplantsButtonElement>;
            "jplants-header": LocalJSX.JplantsHeader & JSXBase.HTMLAttributes<HTMLJplantsHeaderElement>;
            "jplants-list": LocalJSX.JplantsList & JSXBase.HTMLAttributes<HTMLJplantsListElement>;
            "jplants-listitem": LocalJSX.JplantsListitem & JSXBase.HTMLAttributes<HTMLJplantsListitemElement>;
            "jplants-menubar": LocalJSX.JplantsMenubar & JSXBase.HTMLAttributes<HTMLJplantsMenubarElement>;
        }
    }
}
