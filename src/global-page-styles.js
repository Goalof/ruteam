import React from "react";
import { transformVar } from "@quarkly/atomize";
import { createGlobalStyle } from "styled-components";

const pageStyles = {
    "404": {
        "overflow-y": "hidden",
        "overflow-x": "hidden"
    },
    "index": {
        "overflow-y": "hidden",
        "overflow-x": "hidden"
    },
    "vakansii": {
        "overflow-y": "hidden",
        "overflow-x": "hidden"
    },
    "komanda": {
        "overflow-y": "hidden",
        "overflow-x": "hidden"
    },
    "kak-popast-v-komandu": {
        "overflow-y": "hidden",
        "overflow-x": "hidden"
    },
    "kontakty": {
        "overflow-y": "hidden",
        "overflow-x": "hidden"
    }
};

const PageStyles = createGlobalStyle`
    body {
        ${({ styles }) =>
            Object.entries(styles || {}).map(
                ([prop, value]) => `${prop}: ${transformVar(prop, value)};`
            )}
    }
`;
export const GlobalQuarklyPageStyles = ({ pageUrl }) => <PageStyles styles={pageStyles[pageUrl]} />
