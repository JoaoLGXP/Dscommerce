/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import "./styles.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import { useEffect, useState } from "react";
import FormInput from "../../../components/FormInput";
import * as forms from "../../../utils/forms";
import * as productService from "../../../services/product-service";
import * as categoryService from "../../../services/category-service";
import FormTextArea from "../../../components/FormTextArea";
import { CategoryDTO } from "../../../models/category";
import FormSelect from "../../../components/FormSelect";
import { selectStyles } from "../../../utils/select";

export default function ProductForm() {

  const params = useParams();

  const navigate = useNavigate();

  const isEditing = params.productId !== "create";

  const [categories, setCategories] = useState<CategoryDTO[]>([]);

  const [formData, setFormData] = useState<any>({
    name: {
      value: "",
      id: "name",
      name: "name",
      type: "text",
      placeholder: "Nome",
      validation: function (value: string) {
        return /^.{3,80}$/.test(value);
      },
      message: "Favor informar um nome de 3 a 80 caracteres"
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
    },
    description: {
      value: "",
      id: "description",
      name: "description",
      type: "text",
      placeholder: "Descrição",
      validation: function (value: string) {
        return /^.{10,}$/.test(value);
      },
      message: "A descrição deve ter pelo menos 10 caracteres"
    },
    categories: {
      value: [],
      id: "categories",
      name: "categories",
      placeholder: "Categorias",
      validation: function (value: CategoryDTO[]) {
        return value.length > 0;
      },
      message: "Escolha ao menos uma categoria"
    }
  });

  useEffect(() => {
    categoryService.findAllRequest()
      .then(response => {
        setCategories(response.data);
      })
  }, [])

  useEffect(() => {
    if (isEditing) {
      productService.findById(Number(params.productId))
        .then(response => {
          const newFormData = forms.updateAll(formData, response.data);
          setFormData(newFormData);
        })
    }
  }, []);

  function handleInputChange(event: any) {
    setFormData(forms.updateAndValidate(formData, event.target.name, event.target.value));
  }

  function handleTurnDirty(name: string) {
    setFormData(forms.dirtyAndValidate(formData, name));
  }

  function handleSubmit(event: any) {
    event.preventDefault();

    const formDataValidated = forms.dirtyAndValidateAll(formData);
    if (forms.hasAnyInvalid(formDataValidated)) {
      setFormData(formDataValidated);
      return;
    }

    const requestBody = forms.toValues(formData);
    if (isEditing) {
      requestBody.id = params.productId
    }

    productService.updateRequest(requestBody)
      .then(() => {
        navigate("/admin/products")
      });
  }

  return (
    <main>
      <section id="product-form-section" className="dsc-container">
        <form className="dsc-card-product-form" onSubmit={handleSubmit}>
          <div className="dsc-product-form dsc-margin-bottom">
            DADOS DO PRODUTO
          </div>
          <div className="dsc-product-form-container">
            <div>
              <FormInput
                {...formData.name}
                className="dsc-form-control"
                onTurnDirty={handleTurnDirty}
                onChange={handleInputChange}
              />
              <div className="dsc-form-error">{formData.name.message}</div>
            </div>
            <div>
              <FormInput
                {...formData.price}
                className="dsc-form-control"
                onTurnDirty={handleTurnDirty}
                onChange={handleInputChange}
              />
              <div className="dsc-form-error">{formData.price.message}</div>
            </div>
            <div>
              <FormInput
                {...formData.imgUrl}
                className="dsc-form-control"
                onTurnDirty={handleTurnDirty}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <FormSelect
                {...formData.categories}
                className="dsc-form-control dsc-form-select-container"
                styles={selectStyles}
                options={categories}
                onChange={(obj: any) => {
                  const newFormData = forms.updateAndValidate(formData, "categories", obj);
                  setFormData(newFormData);
                }}
                onTurnDirty={handleTurnDirty}
                isMulti
                getOptionLabel={(obj: any) => obj.name}
                getOptionValue={(obj: any) => String(obj.id)}
              />
              <div className="dsc-form-error">{formData.categories.message}</div>
            </div>
            <div>
              <FormTextArea
                {...formData.description}
                className="dsc-product-form-description-input"
                onTurnDirty={handleTurnDirty}
                onChange={handleInputChange}
              />
              <div className="dsc-form-error">{formData.description.message}</div>
            </div>

          </div>
          <div className="dsc-btns-product-form">
            <Link to="/admin/products">
              <ButtonInverse text='Cancelar' />
            </Link>
            <ButtonPrimary text='Salvar' />
          </div>
        </form>
      </section>
    </main>
  );
}