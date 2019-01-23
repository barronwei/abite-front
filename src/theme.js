import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Montserrat:400', 'sans-serif']
  }
})

export const theme = {
  colors: {
    devLogo: '#FA8072',
    mainBackground: '#FAEBD7'
  },
  fonts: {
    primary: {
      family: 'Montserrat, sans-serif',
      weight: 400
    }
  }
}

export const grommetTheme = {
  anchor: {
    fontWeight: 300,
    hover: {
      textDecoration: 'none',
      fontWeight: 600
    }
  }
}
