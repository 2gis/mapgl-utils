/**
 * Determines whether MapGL API supports the current user browser
 */
export function isMapGLSupported(): boolean {
    try {
        const attributes: WebGLContextAttributes = {
            stencil: true,
            antialias: false,
        };

        if ('WebGLRenderingContext' in window) {
            const canvas = document.createElement('canvas');
            const context =
                canvas.getContext('webgl', attributes) ||
                canvas.getContext('experimental-webgl', attributes);

            if (!context) {
                return false;
            }

            const webgl = context as WebGLRenderingContext;

            return Boolean(
                webgl.getExtension('OES_vertex_array_object') &&
                    webgl.getExtension('OES_element_index_uint') &&
                    webgl.getExtension('OES_standard_derivatives'),
            );
        }
    } catch (error) {}

    return false;
}
