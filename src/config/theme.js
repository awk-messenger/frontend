import { createMuiTheme } from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors'

export default createMuiTheme({
  palette: {
    type: 'dark',
    primary: { main: blue.A400 },
    secondary: { main: '#fff' },
  }
})
