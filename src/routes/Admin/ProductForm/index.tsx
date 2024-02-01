/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import "./styles.css";
import { Link, useParams } from "react-router-dom";
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import { useEffect, useState } from "react";
import FormInput from "../../../components/FormInput";
import * as forms from "../../../utils/forms";
import * as productService from "../../../services/product-service";

export default function ProductForm() {

  const params = useParams();

  const isEditing = params.productId !== "create";

  const [formData, setFormData] = useState<any>({
    name: {
      value: "",
      id: "name",
      name: "name",
      type: "text",
      placeholder: "Nome",
    },
    price: {
      value: "",
      id: "price",
      name: "price",
      type: "number",
      placeholder: "Preço",
      validation: function (value: any) {
        return Number(value) > 0;
      },
      message: "Favor informar um valor positivo"
    },
    imgUrl: {
      value: "",
      id: "imgUrl",
      name: "imgUrl",
      type: "text",
      placeholder: "Imagem",
    }
  });

  useEffect(() => {
    if (isEditing) {
      productService.findById(Number(params.productId))
        .then(response => {
          const newFormData = forms.updateAll(formData, response.data);
          setFormData(newFormData);
        })
    }
  }, [])

  function handleInputChange(event: any) {
    setFormData(forms.updateAndValidate(formData, event.target.name, event.target.value));
  }

  function handleTurnDirty(name: string) {
    setFormData(forms.dirtyAndValidate(formData, name));
  }

  return (
    <main>
      <section id="product-form-section" className="dsc-container">
        <div className="dsc-card-product-form">
          <div className="dsc-product-form dsc-margin-bottom">
            DADOS DO PRODUTO
          </div>
          <div className="dsc-product-form-container">
            <div>
              <FormInput
                {...formData.name}
                className="dsc-product-form-input"
                onTurnDirty={handleTurnDirty}
                onChange={handleInputChange}
              />
              <div className="dsc-form-error">{formData.name.message}</div>
            </div>
            <div>
              <FormInput
                {...formData.price}
                className="dsc-product-form-input"
                onTurnDirty={handleTurnDirty}
                onChange={handleInputChange}
              />
              <div className="dsc-form-error">{formData.price.message}</div>
            </div>
            <div>
              <FormInput
                {...formData.imgUrl}
                className="dsc-product-form-input"
                onTurnDirty={handleTurnDirty}
                onChange={handleInputChange}
              />
            </div>

          </div>
          <div className="dsc-btns-product-form">
            <Link to="/admin/products">
              <ButtonInverse text='Cancelar' />
            </Link>
            <ButtonPrimary text='Salvar' />
          </div>
        </div>
      </section>
    </main>
  );
}