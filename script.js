const CANVAS = document.getElementById('canvas');
const CTX = CANVAS.getContext('2d');

const PADDING_AXIS = 50;

const AXIS_X = {
    from:{
        x: PADDING_AXIS,
        y: CANVAS.height - PADDING_AXIS,
    },  
    to: {
        x: CANVAS.width - PADDING_AXIS,
        y: CANVAS.height - PADDING_AXIS,
    }
}

const AXIS_Y = {
    from:{
        x: PADDING_AXIS,
        y: CANVAS.height - PADDING_AXIS,
    },
    to: {
        x: PADDING_AXIS,
        y: PADDING_AXIS,
    }
}
