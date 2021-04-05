import React from 'react';
import { Inspector } from 'react-dev-inspector';
import { connect } from 'umi';

const InspectorWrapper = process.env.NODE_ENV === 'development' ? Inspector : React.Fragment;

const Layout = ({ children }) => <InspectorWrapper>{children}</InspectorWrapper>

export default connect(({ settings }) => ({ ...settings }))(Layout);
