import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import * as React from 'react';
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('Ngo9BigBOggjHTQxAR8/V1NAaF1cXmhNYVdpR2Nbe05zflZCallWVBYiSV9jS3pTdUVmWHpac3VWT2NdUw==')

function ImageEditorTwo() {

    const [custom, setCustom] = React.useState(false)
    let toolbar = ['Annotate', "Line", "Rectangle", "Text", 'ZoomIn', 'ZoomOut', { text: 'Custom' }];

    return (
        <div id="wrapperDiv h-80">
            {/* <button className="speedy inline-flex items-center rounded-md button-sm bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline text-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => setCustom(!custom)}>
            {custom ? 'Back to Normal Editor' : 'Custom Editor'}
            </button> */}
            {custom 
            ? <ImageEditorComponent toolbar={toolbar} /> 
            : <ImageEditorComponent />}
            
        </div>
    );
};
export default ImageEditorTwo;