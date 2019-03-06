# ![hetcanvas](https://deidee.com/logo.png?str=hetcanvas)

Templates voor kunstwebsites.

## Bestanden

(Binaire bestanden zijn niet opgenomen in de repository.)

- 404.html
- apple-touch-icon-precomposed.png
- browserconfig.xml
- favicon.gif
- favicon.ico
- humans.txt
- index.html
- manifest.json
- robots.txt
- sitemap.xml

# Installeren

    git clone git@github.com:deidee/hetcanvas.git
    npm install

# Configuren

In het bestand `Gulpfile.js` kun je in de variabele `data` alle relevante gegevens van de kunstenaar en het kunstwerk kwijt. Standaard bevat het de volgende data:
```javascript
    data: {
        artist: {
            location: 'Den Haag, Nederland',
            name: 'Jan Janssen',
            twitter: 'ACJ',
            url: '/'
        },
        artwork: {
            dir: 'ltr',
            lang: 'en',
            description: 'Blank canvas.',
            title: 'het Canvas',
            themeColor: 'white',
            image: 'https://deidee.com/logo.png?str=hetcanvas',
            url: '/'
        },
        body: '<h1>Hallo, wereld!</h1>'
    }
```
# Compileren

    gulp templates
