// Init
import React from 'react';
// images
import Arrow from '../../assets/Images/about_section_arrow.svg';

import ProjectImg1 from '../../assets/Images/project_card_1.png';
import { motion } from 'framer-motion';
// Component
export default function ProjectCard(props) {
  return (
    <>
      <div className={props.RightTextBox ? 'projectCardContainer' : 'projectCardContainerLeft'}>
        <div className='projectCardHoverDiv'>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className='projectCardTextDiv'
          >
            <div className='projectCardNumberDiv'>
              <div className='projectCardDivider'></div>
              <p className='projectCardNumber'>{props.projectID || 'Project #01'}</p>
            </div>
            <h2 className='projectCardTitle'>{props.title || 'PROCESS AUTOMATION'}</h2>
            <p className='projectCardDesp'>
              {props.desp ||
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit'}
            </p>
          </motion.div>

          <div className='projectCardBtnDiv'>
            <button className='projectCardBtn'>Know More</button>
            <img src={Arrow} />
          </div>
        </div>
        <img className='projectCardBgImage' src={props.bgSrc || ProjectImg1} />
      </div>
    </>
  );
}
