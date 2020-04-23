// @flow strict
import React from 'react';
import { getContactHref, getIcon } from '../../../utils';
import Icon from '../../Icon';
import * as Styled from './Contacts.style';

type Props = {
	contacts: {
		[string]: string,
	},
};

const Contacts = ({ contacts }: Props) => (
	<Styled.Contacts>
		<Styled.List>
			{Object.keys(contacts).map((name) => {
				if (!contacts[name]) {
					return null;
				}
				return (
					<Styled.Item key={name}>
						<Styled.ItemLink
							href={getContactHref(name, contacts[name])}
							rel="noopener noreferrer"
							target="_blank">
							<Icon name={name} icon={getIcon(name)} />
						</Styled.ItemLink>
					</Styled.Item>
				);
			})}
		</Styled.List>
	</Styled.Contacts>
);

export default Contacts;
