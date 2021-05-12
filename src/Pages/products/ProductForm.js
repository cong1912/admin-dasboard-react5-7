import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Layout from "../../components/Layout";

function ProductForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const { id } = useParams();
  useEffect(async () => {
    if (id) {
      const result = await axios
        .get(`products/${id}`)
        .then((result) => {
          console.log("hello");
          setTitle(result.data.title);
          setDescription(result.data.description);
          setImage(result.data.image);
          setPrice(result.data.price);
          console.log(result.data.image);
        })
        .catch(function (error) {});
    }
  }, []);
  const submit = async (e) => {
    e.preventDefault();
    if (id) {
      await axios.put(`products/${id}`, {
        title,
        description,
        image,
        price,
      });
    } else {
      await axios
        .post("products", {
          title,
          description,
          image,
          price,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  return (
    <Layout>
      <form>
        <div className="mb-3">
          <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <TextField
            label="Description"
            value={description}
            rows={4}
            multiline
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <TextField
            label="Image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <TextField
            label="Price"
            value={price}
            type="number"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <Button variant="contained" color="primary" onClick={submit}>
          Submit
        </Button>
      </form>
    </Layout>
  );
}

export default ProductForm;
