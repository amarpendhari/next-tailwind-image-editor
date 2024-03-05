import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import * as React from 'react';
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('Ngo9BigBOggjHTQxAR8/V1NAaF1cXmhNYVdpR2Nbe05zflZCallWVBYiSV9jS3pTdUVmWHpac3VWT2NdUw==')

function ImageEditorTwo() {
    return (
        <div id="wrapperDiv h-80">
            <ImageEditorComponent />
        </div>
    );
};
export default ImageEditorTwo;