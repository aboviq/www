import React from "react";
import CMS from "netlify-cms";

// import TeamPreview from "./cms-preview-templates/team";
// import EmployeePreview from "./cms-preview-templates/employee";
import ProductsPreview from "./cms-preview-templates/products";


// Example of creating a custom color widget
class ColorControl extends React.Component {
  render() {
    return <input
        style={{height: "80px"}}
        type="color"
        value={this.props.value}
        onInput={(e) => this.props.onChange(e.target.value)}
    />;
  }
}

CMS.registerPreviewStyle("/css/main.css");
// CMS.registerPreviewTemplate("team", TeamPreview);
// CMS.registerPreviewTemplate("employee", EmployeePreview);
CMS.registerPreviewTemplate("products", ProductsPreview);
CMS.registerWidget("color", ColorControl);
