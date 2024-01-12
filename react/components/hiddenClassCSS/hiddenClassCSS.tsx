import { FC, useEffect } from 'react'
import { useProduct } from 'vtex.product-context'

const hiddenClassCSS: FC = () => {

  const productContextValue = useProduct()

  const namesAndHrefs = productContextValue?.product?.categoryTree?.map(
    (category: { name: string; href: string }) => ({
      name: category.name,
      href: category.href,
    })
  )

  useEffect(() => {
    const element = document.querySelectorAll('.vtex-flex-layout-0-x-flexRow--hidden-description');
    if (namesAndHrefs?.some((item: { name: string }) => item.name.toLowerCase().includes('medicamentos'))) {
      if (element) {
        element.forEach((el: Element) => {
          const elementToHide = el as HTMLElement;
          elementToHide.style.display = 'none';
        });
        console.log('Departamento encontrados');
      }
    } else {
      console.log('Departamento no encontrados');
    }
  }, [namesAndHrefs]);

  return null;
}

export default hiddenClassCSS
