import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
`;

const SkeletonBox = styled.div`
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(
    90deg,
    var(--skeleton-base) 25%,
    var(--skeleton-shine) 50%,
    var(--skeleton-base) 75%
  );
  background-size: 1200px 100%;
  animation: ${shimmer} 1.6s infinite linear;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.4s ease;
  opacity: ${({ $loaded }) => ($loaded ? 1 : 0)};
`;

/**
 * LazyImage — exibe skeleton animado enquanto a imagem carrega.
 * Aceita todos os props de <img>.
 */
export default function LazyImage({ src, alt, style, className, ...rest }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <SkeletonBox aria-hidden="true" />}
      <Img
        src={src}
        alt={alt}
        $loaded={loaded}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        style={style}
        className={className}
        {...rest}
      />
    </>
  );
}
