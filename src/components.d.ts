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
    interface JplantsHeader {
        "logo": string;
        "logoHref": string;
        "menuSymbol": string;
        "menuSymbolHref": string;
        "navLinksJson": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface SlFlipCard {
    }
    interface SlFooter {
        "slDarkMode": boolean;
        "slDatenschutz": string;
        "slImpressum": string;
    }
    interface SlHeader {
        "slDarkMode": boolean;
    }
    interface SlHeroSection {
        "slHeroHeadline": string;
    }
    interface SlImgGallery {
    }
    interface SlServiceCard {
        "slDarkMode": boolean;
        "slImgSrc": string;
        "slLink": string;
    }
}
declare global {
    interface HTMLExampleComponentElement extends Components.ExampleComponent, HTMLStencilElement {
    }
    var HTMLExampleComponentElement: {
        prototype: HTMLExampleComponentElement;
        new (): HTMLExampleComponentElement;
    };
    interface HTMLJplantsHeaderElement extends Components.JplantsHeader, HTMLStencilElement {
    }
    var HTMLJplantsHeaderElement: {
        prototype: HTMLJplantsHeaderElement;
        new (): HTMLJplantsHeaderElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLSlFlipCardElement extends Components.SlFlipCard, HTMLStencilElement {
    }
    var HTMLSlFlipCardElement: {
        prototype: HTMLSlFlipCardElement;
        new (): HTMLSlFlipCardElement;
    };
    interface HTMLSlFooterElement extends Components.SlFooter, HTMLStencilElement {
    }
    var HTMLSlFooterElement: {
        prototype: HTMLSlFooterElement;
        new (): HTMLSlFooterElement;
    };
    interface HTMLSlHeaderElement extends Components.SlHeader, HTMLStencilElement {
    }
    var HTMLSlHeaderElement: {
        prototype: HTMLSlHeaderElement;
        new (): HTMLSlHeaderElement;
    };
    interface HTMLSlHeroSectionElement extends Components.SlHeroSection, HTMLStencilElement {
    }
    var HTMLSlHeroSectionElement: {
        prototype: HTMLSlHeroSectionElement;
        new (): HTMLSlHeroSectionElement;
    };
    interface HTMLSlImgGalleryElement extends Components.SlImgGallery, HTMLStencilElement {
    }
    var HTMLSlImgGalleryElement: {
        prototype: HTMLSlImgGalleryElement;
        new (): HTMLSlImgGalleryElement;
    };
    interface HTMLSlServiceCardElement extends Components.SlServiceCard, HTMLStencilElement {
    }
    var HTMLSlServiceCardElement: {
        prototype: HTMLSlServiceCardElement;
        new (): HTMLSlServiceCardElement;
    };
    interface HTMLElementTagNameMap {
        "example-component": HTMLExampleComponentElement;
        "jplants-header": HTMLJplantsHeaderElement;
        "my-component": HTMLMyComponentElement;
        "sl-flip-card": HTMLSlFlipCardElement;
        "sl-footer": HTMLSlFooterElement;
        "sl-header": HTMLSlHeaderElement;
        "sl-hero-section": HTMLSlHeroSectionElement;
        "sl-img-gallery": HTMLSlImgGalleryElement;
        "sl-service-card": HTMLSlServiceCardElement;
    }
}
declare namespace LocalJSX {
    interface ExampleComponent {
        "exampleProp"?: string;
        "onExampleEvent"?: (event: CustomEvent<string>) => void;
    }
    interface JplantsHeader {
        "logo"?: string;
        "logoHref"?: string;
        "menuSymbol"?: string;
        "menuSymbolHref"?: string;
        "navLinksJson"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface SlFlipCard {
    }
    interface SlFooter {
        "slDarkMode"?: boolean;
        "slDatenschutz"?: string;
        "slImpressum"?: string;
    }
    interface SlHeader {
        "slDarkMode"?: boolean;
    }
    interface SlHeroSection {
        "slHeroHeadline"?: string;
    }
    interface SlImgGallery {
    }
    interface SlServiceCard {
        "slDarkMode"?: boolean;
        "slImgSrc"?: string;
        "slLink"?: string;
    }
    interface IntrinsicElements {
        "example-component": ExampleComponent;
        "jplants-header": JplantsHeader;
        "my-component": MyComponent;
        "sl-flip-card": SlFlipCard;
        "sl-footer": SlFooter;
        "sl-header": SlHeader;
        "sl-hero-section": SlHeroSection;
        "sl-img-gallery": SlImgGallery;
        "sl-service-card": SlServiceCard;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "example-component": LocalJSX.ExampleComponent & JSXBase.HTMLAttributes<HTMLExampleComponentElement>;
            "jplants-header": LocalJSX.JplantsHeader & JSXBase.HTMLAttributes<HTMLJplantsHeaderElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "sl-flip-card": LocalJSX.SlFlipCard & JSXBase.HTMLAttributes<HTMLSlFlipCardElement>;
            "sl-footer": LocalJSX.SlFooter & JSXBase.HTMLAttributes<HTMLSlFooterElement>;
            "sl-header": LocalJSX.SlHeader & JSXBase.HTMLAttributes<HTMLSlHeaderElement>;
            "sl-hero-section": LocalJSX.SlHeroSection & JSXBase.HTMLAttributes<HTMLSlHeroSectionElement>;
            "sl-img-gallery": LocalJSX.SlImgGallery & JSXBase.HTMLAttributes<HTMLSlImgGalleryElement>;
            "sl-service-card": LocalJSX.SlServiceCard & JSXBase.HTMLAttributes<HTMLSlServiceCardElement>;
        }
    }
}
