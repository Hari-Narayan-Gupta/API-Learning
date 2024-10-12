import React, { useState } from 'react';
import axios from 'axios';
import '../styles/ApiFeature.css';
import AdvertisementCarousel from './AdvertisementCarousel';

const ApiFeature = () => {
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [responseData, setResponseData] = useState({});
  const [loading, setLoading] = useState(false);
  const [responseCode, setResponseCode] = useState(null);
  const [isBodyCopied, setIsBodyCopied] = useState(false);

  const requests = [
    { id: 1, label: 'List Users', url: 'https://reqres.in/api/users?page=1', method: 'GET' },
    { id: 2, label: 'Single User', url: 'https://reqres.in/api/users/2', method: 'GET' },
    { id: 3, label: 'Single User Not Found', url: 'https://reqres.in/api/users/23', method: 'GET' },
    { id: 4, label: 'Create User', url: 'https://reqres.in/api/users', method: 'POST' }
  ];

  const postBodyData = {
    name: "John Doe", 
    job: "Developer"
  };

  const handleCopyResponse = () => {
    navigator.clipboard.writeText(JSON.stringify(responseData, null, 2));
    setIsBodyCopied(true);
    setTimeout(() => setIsBodyCopied(false), 2000);
  };

  const handleRequestClick = (request) => {
    setSelectedRequest(request);
    setLoading(true);
    setResponseCode(null);

    axios({
      method: request.method.toLowerCase(),
      url: request.url,
      data: request.method === 'POST' ? postBodyData : null
    })
      .then(response => {
        setResponseData(response.data);
        setResponseCode(response.status);
        setLoading(false);
      })
      .catch(error => {
        setResponseData({ error: 'Error fetching data' });
        setResponseCode(error.response ? error.response.status : 'Network Error');
        setLoading(false);
      });
  };

  return (
    <>
      <h2 className="api-heading">API Requests</h2>
      <div className="api-container">
        <div className="api-requests">
          <h3>Requests</h3>
          <ul>
            {requests.map(request => (
              <li
                key={request.id}
                onClick={() => handleRequestClick(request)}
                className={selectedRequest?.id === request.id ? 'active' : ''}
              >
                <span className={`request-method ${request.method.toLowerCase()}`}>
                  {request.method}
                </span>
                <span className="request-label">{request.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={`api-response ${loading ? 'loading' : ''}`}>
          <h3>Response</h3>

          {selectedRequest && (
            <>
              <p>
                <strong>Request Type:</strong> {selectedRequest.method}
              </p>
              <p>
                <strong>Request URL:</strong>{' '}
                <a href={selectedRequest.url} target="_blank" rel="noopener noreferrer">
                  {selectedRequest.url}
                </a>
              </p>
              {selectedRequest.method === 'POST' && (
                <div>
                  <h4>Body Data:</h4>
                  <pre>{JSON.stringify(postBodyData, null, 2)}</pre>
                </div>
              )}
            </>
          )}

          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="response-container">
              <div className="copy-icon-wrapper">
                <span className="copy-icon" onClick={handleCopyResponse}>📋</span>
                {isBodyCopied && <span className="copied-label">Copied!</span>}
              </div>
              <pre>{JSON.stringify(responseData, null, 2)}</pre>
            </div>
          )}
        </div>
      </div>

      {/* Advertisement Element */}
      <div className="fixed-ad">
        {/* <h4>Advertisement</h4> */}
        <AdvertisementCarousel />
      </div>
    </>
  );
};

export default ApiFeature;
