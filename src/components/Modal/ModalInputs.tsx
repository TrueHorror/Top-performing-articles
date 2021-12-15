import React, { Dispatch, SetStateAction, useState } from "react";
import DatePicker from "react-datepicker";
import { Article } from "../../models/Article.model";
import 'react-datepicker/dist/react-datepicker.css'
import { Endpoints, Paths } from "../../utils/Endpoints";

const ModalInputs = (props: {
  displayModal: boolean;
  setDisplayModal: Dispatch<SetStateAction<boolean>>;
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
    console.log(JSON.stringify(values));
    await fetch(Paths.Articles, { 
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(values),
    }).then((response) => response.json())
    //Then with the data from the response in JSON...
    .then((data) => {
      console.log('Success:', data);
    })
    //Then with the error genereted...
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  const { onChange, onSubmit, values, handleDate } = useForm(
    postArticle,
    initialState
  );

  return (
    <form onSubmit={onSubmit}>
      <label>Title</label>
      <input name="title" type="text" onChange={onChange} />

      <label>Published</label>
      {/* Only able to select date and not time. Can be implemented later */}
      <DatePicker selected={values.published} onChange={handleDate} />

      <label>Site</label>
      <input name="site" type="text" onChange={onChange} />

      <label>Ad Group</label>
      <input name="adGroup" type="text" onChange={onChange} />

      <label>Bids</label>
      <input name="bids" type="text" onChange={onChange} />

      <label>Spending</label>
      <input name="spending" type="text" onChange={onChange} />

      <label>Win Rate</label>
      <input name="winRate" type="text" onChange={onChange} />

      <label>Impressions</label>
      <input name="impressions" type="text" onChange={onChange} />

      <label>Clicks</label>
      <input name="clicks" type="text" onChange={onChange} />

      <label>CTR</label>
      <input name="ctr" type="text" onChange={onChange} />

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
