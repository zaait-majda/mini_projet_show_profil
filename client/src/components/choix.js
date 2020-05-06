import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from 'antd';
import '../App.css';

function choix(){
  

  return (
    <div>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size:60 ,
        }}
        
   
      >
        <fieldset>
            <h6 style={{margin:'40px 340px',color:'#00001a'}}>Formulaire de Choix De Filière :</h6>
       
        <Form.Item label="La Note :">
         <Input type="text"  placeholder="Votre  note"  />
        </Form.Item>
        <Form.Item label="Le classement :">
         <Input type="text"  placeholder="Votre  classement"    />
        </Form.Item>
        <Form.Item label="Choix 1 :">
          <Select>
          <Select.Option selected>---Le premier choix---</Select.Option>
            <Select.Option value="CP">CP</Select.Option>
            <Select.Option value="Génie Informatique">Génie Informatique</Select.Option>
            <Select.Option value="Génie Réseaux">Génie Réseaux</Select.Option>
            <Select.Option value="GPMC">GPMC</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Choix 2 :">
          <Select>
          <Select.Option selected>---Le deuxième choix---</Select.Option>
            <Select.Option value="CP">CP</Select.Option>
            <Select.Option value="Génie Informatique">Génie Informatique</Select.Option>
            <Select.Option value="Génie Réseaux">Génie Réseaux</Select.Option>
            <Select.Option value="GPMC">GPMC</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Choix 3 :">
          <Select>
          <Select.Option selected>---Le troisième choix---</Select.Option>
            <Select.Option value="CP">CP</Select.Option>
            <Select.Option value="Génie Informatique">Génie Informatique</Select.Option>
            <Select.Option value="Génie Réseaux">Génie Réseaux</Select.Option>
            <Select.Option value="GPMC">GPMC</Select.Option>
          </Select>
        </Form.Item>


        <Form.Item label="Choix 4 :">
          <Select>
          <Select.Option selected>---Le dernier choix---</Select.Option>
            <Select.Option value="CP">CP</Select.Option>
            <Select.Option value="Génie Informatique">Génie Informatique</Select.Option>
            <Select.Option value="Génie Réseaux">Génie Réseaux</Select.Option>
            <Select.Option value="GPMC">GPMC</Select.Option>
          </Select>
        </Form.Item>

        

        
        
       
        <Form.Item label="">
          <Button type='dashed' style={{float:'right', background:'#00001a',color:'white',margin:'10px 2px', width:'50%'}}>Valider votre choix</Button>
        </Form.Item>
        </fieldset>
      </Form>
    </div>
  );
}

export default choix;

