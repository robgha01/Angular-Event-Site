#The sass structure uses [ITCSS](http://www.gpmd.co.uk/blog/scalable-css/)

## Layers

1. Settings: Global variables config switches (colours, screen sizes)
1. Tools: Functions and mixins
1. Generic: Ground-zero styles (normalize/reset.css, box-sizing)
1. [Bootstrap](####Bootstrap)(*optional*): A bootstraper layer for the theme layer
1. Base: Unclassed HTML elements (type selectors)
1. Objects: Unstyled design patterns (media object)
1. Components: Styled objects, chunks of UI
1. Theme(*optional*): Themed components, used for multiple sites with the same layout and components. Can be utilised for multi-site Magento setups.
1. Trumps: Helpers and overrides, e.g. .float-left { float:left !important;}

* * *

####Bootstrap Layer
This layer handle theme based bootstraping, override any !default variable here
for a specefic theme. ex `$body-bg: #fff;` will set the bootstrap background color.