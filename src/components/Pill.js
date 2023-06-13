import React from 'react'

export default function Pill(props) {

    const styles = {
        pill: {
            display: "flex",
            minWidth: "60px",
            witdth: "auto",
            maxWidth: "120px",
            padding: "2px 15px",
            height: "25px",
            fontSize: "0.875rem",
            fontWeight: 200,
            textAlign: "center",
            justifyContent: "center",
            borderRadius: "10rem",
            backgroundColor: "#B0B0B0",
            color: "#fff",

          }
      }


  return (
    <div style={styles.pill}>
      {props.label}
    </div>
  )
}
