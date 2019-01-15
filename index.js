import Plugin from './src/core/Plugin';

import { MetaModel } from './src/ontology/MetaModel';
import { Stylesheet } from './src/ontology/Stylesheet';
import { ToolConfiguration } from './src/ontology/ToolConfiguration';


export default {
    Plugin,
    Ontology: {
        MetaModel,
        Stylesheet,
        ToolConfiguration
    }
};
