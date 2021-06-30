declare module '*.vue' {
    import { ComponentOptions } from 'vue'
    const componentOptions: ComponentOptions
    export default componentOptions
}

interface Window {
    axios: any;
    $message: any;
}

declare interface response<T> {
    code: number,
    data: T,
    message: string
    note: string
}



declare module '@bundled-es-modules/axios'