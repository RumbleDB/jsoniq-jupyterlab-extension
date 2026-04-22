import { LabIcon } from "@jupyterlab/ui-components";

import jsoniqSVG from "../images/JSONiq.svg";
import { JUPYTER_PLUGIN_ID } from "./const";

export const jsoniqIcon = new LabIcon({
    svgstr: jsoniqSVG,
    name: `${JUPYTER_PLUGIN_ID}:jsoniq`,
});
