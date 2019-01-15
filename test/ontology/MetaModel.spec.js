import { MetaModel } from '../../src/ontology/MetaModel';


describe('ontology/MetaModel', () => {
    let metaModel = {
        "type": "test-net",
        "classifiers": [
            {
                "type": "classifier_1"
            },
            {
                "type": "classifier_2"
            }
        ],
        "relations": [
            {
                "type": "relation_1"
            },
            {
                "type": "relation_2"
            }
        ],
        "text": [
            {
                "type": "text_1"
            },
            {
                "type": "text_2"
            }
        ]
    };

    describe("parse json", () => {
        it('should parse the MetaModel type', () => {
            expect(MetaModel.fromJson(metaModel).type)
                .to.be.eqls(metaModel.type);
        });

        it('should be 2 different classifiers', () => {
            expect(MetaModel.fromJson(metaModel).classifiers.length)
                .to.be.eqls(metaModel.classifiers.length);
        });
    });

});
