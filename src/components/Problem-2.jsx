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
 

  useEffect(() => {
    axios.get('https://contact.mediusware.com/api/contacts/?format=json').then((response) => {
        setContactsA(response.data.results);
        console.log(response.data.results);
      })
  }, [filterTextA, onlyEvenA]);

  useEffect(() => {
    // Fetch contacts from the API for Modal B (US Contacts)
    // You should implement this API call according to the provided documentation.
    // Remember to apply filters for even IDs and search text.
  }, [filterTextB, onlyEvenB]);

  const openModalA = () => {
    setShowModalA(true);
    setShowModalB(false);
    // Fetch initial data for Modal A when opening it
  };

  const openModalB = () => {
    setShowModalB(true);
    setShowModalA(false);
    // Fetch initial data for Modal B when opening it
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
                contactsA.map((contact, index) =>  <li key={index}>{contact.phone}</li>)
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
                USContact.map((contact, index) =>  <li key={index}>{contact.phone}</li>)
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
    </div>
  );
};

export default Problem2;
