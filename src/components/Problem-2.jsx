import axios from "axios";
import React, { useState, useEffect } from "react";

const Problem2 = () => {
  const [showModalA, setShowModalA] = useState(false);
  const [showModalB, setShowModalB] = useState(false);
  const [showModalC, setShowModalC] = useState(false);
  const [filterTextA, setFilterTextA] = useState("");
  const [filterTextB, setFilterTextB] = useState("");
  const [onlyEvenA, setOnlyEvenA] = useState(false);
  const [onlyEvenB, setOnlyEvenB] = useState(false);
  const [contactsA, setContactsA] = useState([]);
  const [contactsB, setContactsB] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);

  const USContact = contactsA.filter(item => item.country.name == "United States");
  const BDContact = contactsA.filter(item => item.country.name == "Bangladesh");
 

  useEffect(() => {
    axios.get('https://contact.mediusware.com/api/contacts/?format=json').then((response) => {
        setContactsA(response.data.results);
        console.log(response.data.results);
      })
  }, [filterTextA, onlyEvenA]);

  const openModalA = () => {
    setShowModalA(true);
    setShowModalB(false);
    setShowModalC(false);
  };

  const openModalB = () => {
    setShowModalB(true);
    setShowModalA(false);
    setShowModalC(false);
  };

  const openModalC = () => {
    setShowModalC(true);
    setShowModalB(false);
    setShowModalA(false);
  };

  const closeModalA = () => {
    setShowModalA(false);
  };

  const closeModalB = () => {
    setShowModalB(false);
  };

  const closeModalC = () => {
    setShowModalC(false);
  };

 

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg btn-outline-primary"
            type="button"
            onClick={openModalA}
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg btn-outline-warning"
            type="button"
            onClick={openModalB}
          >
            US Contacts
          </button>
        </div>
      </div>

      {/* Modal A (All Contacts) */}
      <div
        className={`modal ${showModalA ? "show d-block" : ""}`}
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal A - All Contacts</h5>
              <button type="button" className="close" onClick={closeModalA}>
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <button
              style={{ backgroundColor: "#46139f", color: "#FFFFFF" }}
                className="btn btn-lg btn-outline-primary"
                type="button"
                onClick={openModalA}
              >
                All Contacts
              </button>
              <button
                  style={{ backgroundColor: "#ff7f50", color: "#FFFFFF" }}
                className="btn btn-lg btn-outline-warning"
                type="button"
                onClick={openModalB}
              >
                US Contacts
              </button>
              <button
                type="button"
                className="btn btn-lg btn-primary"
                onClick={closeModalA}
              >
                Close
              </button>
            </div>
            <div>
                <ul>
                   
                {
                contactsA.map((contact, index) =>  <li key={index} onClick={openModalC}>{contact.phone} <button
                style={{ border: "1px solid #46139f" }}
                type="button"
                className="btn"
                onClick={openModalC}
              >
                Modal - C
              </button></li>)
                }
                </ul>
            </div>
            <div className="modal-footer">
              <label>
                <input
                  type="checkbox"
                  checked={onlyEvenA}
                  onChange={() => setOnlyEvenA(!onlyEvenA)}
                />{" "}
                Only Even
              </label>
              <button
                type="button"
                className="btn btn-primary"
                onClick={closeModalA}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal B (US Contacts) */}
      <div
        className={`modal ${showModalB ? "show d-block" : ""}`}
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal B - US Contacts</h5>
              <button type="button" className="close" onClick={closeModalB}>
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <button
style={{ backgroundColor: "#46139f", color: "#FFFFFF" }}
                className="btn btn-lg "
                type="button"
                onClick={openModalA}
              >
                All Contacts
              </button>
              <button
                  style={{ backgroundColor: "#ff7f50", color: "#FFFFFF" }}
                className="btn btn-lg "
                type="button"
                onClick={openModalB}
              >
                US Contacts
              </button>
              <button
                type="button"
                className="btn btn-lg btn-primary"
                onClick={closeModalB}
              >
                Close
              </button>
            </div>
            <div>
                <ul>
                   
                {
                USContact.map((contact, index) =>  <li key={index} onClick={openModalC}>{contact.phone} <button
                style={{ border: "1px solid #46139f" }}
                type="button"
                className="btn"
                onClick={openModalC}
              >
                Modal - C
              </button></li>)
                }
                </ul>
            </div>
            <div className="modal-footer">
              <label>
                <input
                  type="checkbox"
                  checked={onlyEvenB}
                  onChange={() => setOnlyEvenB(!onlyEvenB)}
                />{" "}
                Only Even
              </label>
              <button
                type="button"
                className="btn btn-primary"
                onClick={closeModalB}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal c */}
      <div
        className={`modal ${showModalC ? "show d-block" : ""}`}
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal C - Bangladesh Contacts</h5>
              <button type="button" className="close" onClick={closeModalC}>
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <button
              style={{ backgroundColor: "#46139f", color: "#FFFFFF" }}
                className="btn btn-lg btn-outline-primary"
                type="button"
                onClick={openModalA}
              >
                All Contacts
              </button>
              <button
              style={{ backgroundColor: "#ff7f50", color: "#FFFFFF" }}
                className="btn btn-lg btn-outline-warning"
                type="button"
                onClick={openModalB}
              >
                US Contacts
              </button>
              <button
                type="button"
                className="btn btn-lg btn-primary"
                onClick={closeModalC}
              >
                Close
              </button>
            </div>
            <div>
                <ul>
                   
                {
                BDContact.map((contact, index) =>  <li key={index} onClick={openModalC}>{contact.phone} </li>)
                }
                </ul>
            </div>
            <div className="modal-footer">
              <label>
                <input
                  type="checkbox"
                  checked={onlyEvenB}
                  onChange={() => setOnlyEvenB(!onlyEvenB)}
                />{" "}
                Only Even
              </label>
              <button
                type="button"
                className="btn btn-primary"
                onClick={closeModalC}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problem2;
