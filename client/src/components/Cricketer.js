import React, { Fragment } from 'react';
import { Card, Avatar } from 'antd';
import Meta from 'antd/lib/card/Meta';
import Title from 'antd/lib/typography/Title';
export const Cricketer = ({ name, Filière, avatarSrc, children }) =>
	<Card bordered style={{ width: 300, float: 'left', margin: 10 }}>
		<Meta
			avatar={<Avatar src={avatarSrc} />}
			title={name}
		/>
		<hr></hr>
		Filière : {Filière}
		<br></br>
		{children}
	</Card>
export const TestCareer = ({ CNE, children }) =>
	<Card.Grid style={{ width: '100%' }}>
		<Title level={4}>CNE : {CNE}</Title>
		{children}
	</Card.Grid>
export const Bowling = ({ CIN, Niveau }) =>
	<Fragment>
		CIN : {CIN}
		<br></br>
		Niveau : {Niveau}
	</Fragment>