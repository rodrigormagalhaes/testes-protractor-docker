// Para exibir log detalhado no console
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

// Para gerar relatório
var HtmlReporter = require('protractor-beautiful-reporter');


exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['*.js'],

    capabilities: {
        browserName: 'chrome',

        chromeOptions: {
            args: ["--disable-gpu", "no-sandbox"]
        }
    },

    onPrepare: function () {
        //gera relatório
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'report', // diretório para salvar
            docTitle: 'Relatório de Teste' // título do relatório
        }).getJasmine2Reporter());

        // Exibe log detalhado no console
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true
            }
        }));
    }
};