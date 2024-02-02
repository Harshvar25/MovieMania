import React from 'react';
import "../styles/section03.css";
import FeatureBox from './FeatureBox';

function Section03() {
  return (
    <div className='section03'>
    We let you...
      {/* <p className='text'>We let you</p> */}
      <div className='featureBoxContainer'>
        <FeatureBox
          box="1"
          icon="remove_red_eye"
          text="Keep track of every film you've
                ever watched (or just start
                from the day you join)"/>
        <FeatureBox
          box="2"
          icon="favorite"
          text='Show some love for your
favorite films, lists and reviews
with a "like"'/>
        <FeatureBox
          box="3"
          icon="format_align_left"
          text="Write and share reviews, and
follow friends and other
members to read theirs"/>
        <FeatureBox
          box="1"
          icon=" 	star_rate"
          text="Rate each film on a five-star
scale (with halves) to record
and share your reaction"/>
        <FeatureBox
          box="2"
          icon="event_note"
          text="Keep a diary of your film
watching (and upgrade to
Pro for comprehensive stats)"/>
        <FeatureBox
          box="3"
          icon=" 	view_week"
          text="Compile and share lists of
films on any topic and keep a
watchlist of films to see"/>
      </div>

    </div>
  )
}

export default Section03