import React, { memo } from "react";
import PropTypes from "prop-types";
import { renderRoutes } from "react-router-config";

const Discovery = (props) => {
  return (
    <div>
      {renderRoutes(props.route.routes)}
      Discovery
    </div>
  );
};

Discovery.propTypes = {};

export default memo(Discovery);
