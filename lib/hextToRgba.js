// MUI
import { hexToRgb } from '@material-ui/core/styles'

// HexToRgba Helper
const hextoRgbaHelper = ( hex, a ) => {
    return hexToRgb(hex).slice(0, -1).concat( ', ' + a + ')')
}
export default hextoRgbaHelper