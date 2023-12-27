const Logo = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 2,
    }}
    viewBox="0 0 289 80"
    width="240"
    // height="80"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <use xlinkHref="#a" width={289} height={76} />
    <defs>
      <image
        xlinkHref="data:image/png;base64,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"
        id="a"
        width={289}
        height={76}
      />
    </defs>
  </svg>
);
export default Logo;
