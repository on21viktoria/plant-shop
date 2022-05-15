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
    interface JplantsCard {
        "image": string;
        "name": string;
        "price": string;
        "tags"?: string;
    }
    interface JplantsCustomergallery {
    }
    interface JplantsFooter {
        "footerLinksJson": string;
        "logo": string;
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
        "filledStars": number;
    }
    interface JplantsSearchbar {
        "searchBarName": string;
    }
    interface JplantsToast {
        "toast": string;
        "toastButtonTitle": string;
        "toastMessage": string;
        "toastPosition": string;
        "toastTitle": string;
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
    interface HTMLJplantsCardElement extends Components.JplantsCard, HTMLStencilElement {
    }
    var HTMLJplantsCardElement: {
        prototype: HTMLJplantsCardElement;
        new (): HTMLJplantsCardElement;
    };
    interface HTMLJplantsCustomergalleryElement extends Components.JplantsCustomergallery, HTMLStencilElement {
    }
    var HTMLJplantsCustomergalleryElement: {
        prototype: HTMLJplantsCustomergalleryElement;
        new (): HTMLJplantsCustomergalleryElement;
    };
    interface HTMLJplantsFooterElement extends Components.JplantsFooter, HTMLStencilElement {
    }
    var HTMLJplantsFooterElement: {
        prototype: HTMLJplantsFooterElement;
        new (): HTMLJplantsFooterElement;
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
    interface HTMLJplantsSearchbarElement extends Components.JplantsSearchbar, HTMLStencilElement {
    }
    var HTMLJplantsSearchbarElement: {
        prototype: HTMLJplantsSearchbarElement;
        new (): HTMLJplantsSearchbarElement;
    };
    interface HTMLJplantsToastElement extends Components.JplantsToast, HTMLStencilElement {
    }
    var HTMLJplantsToastElement: {
        prototype: HTMLJplantsToastElement;
        new (): HTMLJplantsToastElement;
    };
    interface HTMLElementTagNameMap {
        "jplant-article": HTMLJplantArticleElement;
        "jplants-button": HTMLJplantsButtonElement;
        "jplants-card": HTMLJplantsCardElement;
        "jplants-customergallery": HTMLJplantsCustomergalleryElement;
        "jplants-footer": HTMLJplantsFooterElement;
        "jplants-header": HTMLJplantsHeaderElement;
        "jplants-menubar": HTMLJplantsMenubarElement;
        "jplants-rating-stars": HTMLJplantsRatingStarsElement;
        "jplants-searchbar": HTMLJplantsSearchbarElement;
        "jplants-toast": HTMLJplantsToastElement;
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
    interface JplantsCard {
        "image"?: string;
        "name"?: string;
        "price"?: string;
        "tags"?: string;
    }
    interface JplantsCustomergallery {
    }
    interface JplantsFooter {
        "footerLinksJson"?: string;
        "logo"?: string;
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
        "filledStars"?: number;
    }
    interface JplantsSearchbar {
        "searchBarName"?: string;
    }
    interface JplantsToast {
        "onShow"?: (event: CustomEvent<any>) => void;
        "toast"?: string;
        "toastButtonTitle"?: string;
        "toastMessage"?: string;
        "toastPosition"?: string;
        "toastTitle"?: string;
    }
    interface IntrinsicElements {
        "jplant-article": JplantArticle;
        "jplants-button": JplantsButton;
        "jplants-card": JplantsCard;
        "jplants-customergallery": JplantsCustomergallery;
        "jplants-footer": JplantsFooter;
        "jplants-header": JplantsHeader;
        "jplants-menubar": JplantsMenubar;
        "jplants-rating-stars": JplantsRatingStars;
        "jplants-searchbar": JplantsSearchbar;
        "jplants-toast": JplantsToast;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "jplant-article": LocalJSX.JplantArticle & JSXBase.HTMLAttributes<HTMLJplantArticleElement>;
            "jplants-button": LocalJSX.JplantsButton & JSXBase.HTMLAttributes<HTMLJplantsButtonElement>;
            "jplants-card": LocalJSX.JplantsCard & JSXBase.HTMLAttributes<HTMLJplantsCardElement>;
            "jplants-customergallery": LocalJSX.JplantsCustomergallery & JSXBase.HTMLAttributes<HTMLJplantsCustomergalleryElement>;
            "jplants-footer": LocalJSX.JplantsFooter & JSXBase.HTMLAttributes<HTMLJplantsFooterElement>;
            "jplants-header": LocalJSX.JplantsHeader & JSXBase.HTMLAttributes<HTMLJplantsHeaderElement>;
            "jplants-menubar": LocalJSX.JplantsMenubar & JSXBase.HTMLAttributes<HTMLJplantsMenubarElement>;
            "jplants-rating-stars": LocalJSX.JplantsRatingStars & JSXBase.HTMLAttributes<HTMLJplantsRatingStarsElement>;
            "jplants-searchbar": LocalJSX.JplantsSearchbar & JSXBase.HTMLAttributes<HTMLJplantsSearchbarElement>;
            "jplants-toast": LocalJSX.JplantsToast & JSXBase.HTMLAttributes<HTMLJplantsToastElement>;
        }
    }
}
