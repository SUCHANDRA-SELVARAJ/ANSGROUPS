import { useEffect } from 'react';

/**
 * SeoMeta Component
 * Updates page title and meta description dynamically based on the current page.
 */
export default function SeoMeta({ title, description }) {
  useEffect(() => {
    const defaultTitle = "ANS GROUP CAR RENTAL PVT LMTD | Self Drive Car Rental";
    document.title = title ? `${title} | ANS GROUP CAR RENTAL PVT LMTD` : defaultTitle;

    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = description;
    }
  }, [title, description]);

  return null;
}
