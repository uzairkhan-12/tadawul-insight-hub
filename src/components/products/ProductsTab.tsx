import { useState } from "react";
import ProductsLanding from "./ProductsLanding";
import SubsidiaryView from "./SubsidiaryView";
import ProductDetail from "./ProductDetail";
import { getProductById } from "@/data/productsData";
import { getSubsidiaryById } from "@/data/productsData";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type View = 
  | { type: "landing" }
  | { type: "subsidiary"; id: string }
  | { type: "product"; id: string };

const ProductsTab = () => {
  const [view, setView] = useState<View>({ type: "landing" });

  const handleSelectSubsidiary = (id: string) => setView({ type: "subsidiary", id });
  const handleSelectProduct = (id: string) => setView({ type: "product", id });
  const goToLanding = () => setView({ type: "landing" });

  const renderBreadcrumb = () => {
    if (view.type === "landing") return null;

    return (
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink className="cursor-pointer" onClick={goToLanding}>
              Products Review
            </BreadcrumbLink>
          </BreadcrumbItem>
          {view.type === "subsidiary" && (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{getSubsidiaryById(view.id)?.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </>
          )}
          {view.type === "product" && (() => {
            const product = getProductById(view.id);
            const sub = product ? { name: product.subsidiary } : null;
            return (
              <>
                {sub && (
                  <>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink
                        className="cursor-pointer"
                        onClick={() => {
                          const subId = product?.subsidiary === "Saudi Exchange" ? "saudi-exchange" :
                            product?.subsidiary === "Edaa" ? "edaa" : "wamid";
                          handleSelectSubsidiary(subId);
                        }}
                      >
                        {sub.name}
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  </>
                )}
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{product?.name}</BreadcrumbPage>
                </BreadcrumbItem>
              </>
            );
          })()}
        </BreadcrumbList>
      </Breadcrumb>
    );
  };

  return (
    <div>
      {renderBreadcrumb()}
      {view.type === "landing" && (
        <ProductsLanding
          onSelectSubsidiary={handleSelectSubsidiary}
          onSelectProduct={handleSelectProduct}
        />
      )}
      {view.type === "subsidiary" && (
        <SubsidiaryView
          subsidiaryId={view.id}
          onSelectProduct={handleSelectProduct}
        />
      )}
      {view.type === "product" && (
        <ProductDetail productId={view.id} />
      )}
    </div>
  );
};

export default ProductsTab;
