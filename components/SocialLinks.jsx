import React from "react";
import { Button } from "reactstrap";
import { socialLinks } from "../portfolio";

const SocialLinks = () => {
  return (
    <div className="btn-wrapper text-lg">
      {socialLinks.map(({ color, link, ariaLabel, icon }, index) => (
        <Button
          key={index}
          className="btn-icon-only rounded-circle ml-1"
          rel="noopener"
          aria-label={ariaLabel}
          href={link}
          target="_blank"
          color={color}
        >
          <span className="btn-inner--icon">
            <i className={icon} />
          </span>
        </Button>
      ))}
    </div>
  );
};

export default SocialLinks;
