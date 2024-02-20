declare module '*.scss' {
    const content: Record<string, string>
    export default content
}

declare module '*.svg' {
    import * as React from 'react';

    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;

    const src: string;
    export default src;
}
declare module '*.jpg' {
    import * as React from 'react';

    export const ImageComponent: React.FunctionComponent<
        React.ImgHTMLAttributes<HTMLImageElement> & { title?: string }>;

    const src: string;
    export default src;
}
