const PageTemplate = ({ state, title, content }) => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8" />
            <link rel="shortcut icon" href="favicon.ico" />
            <link rel="manifest" href="manifest.json" /> 
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <meta name="theme-color" content="#000000" /> 
            <title>${title}</title>
            <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        </head>
        <body class="bg-light">
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <div id="app">${content}</div>  
            <script> window.__STATE__=${JSON.stringify(state, null, 2)}; </script>
            <script src="bundle.js"></script>
        </body>
        </html> 
    `;
}

export default PageTemplate;