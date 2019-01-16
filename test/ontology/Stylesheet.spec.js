import { Stylesheet } from '../../src/ontology/Stylesheet';


describe('ontology/Stylesheet', () => {
    let stylesheet = {
        "classifier-styles": [
            {
                "target-type": "classifier_1",
                "representation": "classifier_1.svg",
                "default-dimension": {
                    "width": 10,
                    "height": 10
                },
                "background-color": "white",
                "line-color": "black",
                "line-style": "normal-line"
            },
            {
                "target-type": "classifier_2",
                "representation": "classifier_2.svg",
                "default-dimension": {
                    "width": 10,
                    "height": 10
                },
                "background-color": "gray",
                "line-color": "blue",
                "line-style": "normal-line"
            }
        ],
        "relation-styles": [
            {
                "target-type": "relation_1",
                "arrow-start": "normal-arrow"
            },
            {
                "target-type": "relation_2",
                "arrow-end": "normal-arrow"
            }
        ],
        "text-styles": [
            {
                "target-type": "text_1"
            },
            {
                "target-type": "text_2"
            }
        ]
    };

    describe("ClassifierStyle", () => {
        it('should parse classifier styles', () => {
            expect(Stylesheet.fromJson(stylesheet).classifierStyles.length)
                .to.be.eqls(stylesheet['classifier-styles'].length);


            expect(Stylesheet.fromJson(stylesheet).classifierStyles[0].targetType)
                .to.be.eqls(stylesheet['classifier-styles'][0]['target-type']);
        });

        it('should parse the default dimension', () => {
            let ontologyStyle = stylesheet['classifier-styles'][0];
            let classifierStyle = Stylesheet.fromJson(stylesheet).classifierStyles[0];

            expect(classifierStyle.defaultDimension.width)
                .to.be.eqls(ontologyStyle['default-dimension'].width);
            expect(classifierStyle.defaultDimension.height)
                .to.be.eqls(ontologyStyle['default-dimension'].height);
        });

        it('should have the right color style', () => {
            let ontologyStyle = stylesheet['classifier-styles'][1];
            let classifierStyle = Stylesheet.fromJson(stylesheet).classifierStyles[1];

            expect(classifierStyle.backgroundColor)
                .to.be.eqls(ontologyStyle['background-color']);
            expect(classifierStyle.lineColor)
                .to.be.eqls(ontologyStyle['line-color']);
            expect(classifierStyle.lineStyle)
                .to.be.eqls(ontologyStyle['line-style']);
        });

        it('should parse representation correctly', () => {
            let ontologyStyle = stylesheet['classifier-styles'][1];
            let classifierStyle = Stylesheet.fromJson(stylesheet).classifierStyles[1];

            expect(classifierStyle.representation)
                .to.be.eqls(ontologyStyle.representation);
        });
    });

});
