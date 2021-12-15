import React, { Dispatch, SetStateAction, useState } from "react";
import DatePicker from "react-datepicker";
import { Article } from "../../models/Article.model";
import "react-datepicker/dist/react-datepicker.css";
import { Endpoints, Paths } from "../../utils/Endpoints";

const ModalInputs = (props: {
  displayModal: boolean;
  setDisplayModal: Dispatch<SetStateAction<boolean>>;
  setUpdateList: Dispatch<SetStateAction<boolean>>;
}) => {
  const initialState = {
    title: "",
    published: new Date(),
    site: "",
    adGroup: "",
    bids: 0,
    spending: 0,
    winRate: 0,
    impressions: 0,
    clicks: 0,
    ctr: 0,
  } as Article;

  const postArticle = async () => {
    props.setDisplayModal(!props.displayModal);

    await fetch(Paths.Articles, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      //Then with the data from the response in JSON...
      .then((data) => {
        console.log("Success:", data);
      })
      //Then with the error genereted...
      .catch((error) => {
        console.error("Error:", error);
      });

      props.setUpdateList(true);
  };

  const { onChange, onSubmit, values, handleDate } = useForm(
    postArticle,
    initialState
  );

  return (
    <form className="form" onSubmit={onSubmit}>
      <label>Title</label>
      <input className="input" name="title" type="text" onChange={onChange} />

      <label>Published</label>
      {/* Only able to select date and not time. Can be implemented later */}
      <DatePicker selected={values.published} onChange={handleDate} />

      <label>Site</label>
      <input className="input" name="site" type="text" onChange={onChange} />

      <label htmlFor="adGroup">Ad Group</label>
      <input className="input" name="adGroup" type="text" onChange={onChange} />
      <div className="bottom-form">
        <div className="numeric-container">
          <label>Bids</label>
          <input
            className="input numeric"
            name="bids"
            type="number"
            onChange={onChange}
          />
        </div>
        <div className="numeric-container">
          <label>Spending</label>
          <input
            className="input numeric"
            name="spending"
            type="number"
            onChange={onChange}
          />
        </div>
        <div className="numeric-container">
          <label>Win Rate</label>
          <input
            className="input numeric"
            name="winRate"
            type="number"
            onChange={onChange}
          />
        </div>
        <div className="numeric-container">
          <label>Impressions</label>
          <input
            className="input numeric"
            name="impressions"
            type="number"
            onChange={onChange}
          />
        </div>
        <div className="numeric-container">
          <label>Clicks</label>
          <input
            className="input numeric"
            name="clicks"
            type="number"
            onChange={onChange}
          />
        </div>
        <div className="numeric-container">
          <label>CTR</label>
          <input
            className="input"
            name="ctr"
            type="number"
            step="any"
            onChange={onChange}
          />
        </div>
      </div>

      <button type="submit">Save</button>
    </form>
  );
};

//Thanks to https://dev.to/karan316/build-forms-using-react-the-easy-way-with-typescript-46bh
export const useForm = (callback: any, initialState: Article) => {
  const [values, setValues] = useState(initialState);

  const handleDate = (date: Date) => {
    setValues({ ...values, published: date });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await callback();
  };

  return {
    onChange,
    onSubmit,
    values,
    handleDate,
  };
};

export default ModalInputs;
