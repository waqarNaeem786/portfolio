import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Footbar from '../component/Footbar';

function IndoPak() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/blogs');
  };

  return (
    <div className="IndoPakBlog" style={{ marginTop: '5rem', padding: '2rem' }}>
      <button
        onClick={goBack}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: '1.5rem',
          marginBottom: '1rem',
        }}
      >
        <FaArrowLeft />
      </button>

      <h1>India-China Border Dispute: A Threat to Regional Security</h1>
      <p>Published on 22 August 2023</p>
      <hr />

      <section>
        <h2>Introduction</h2>
        <img
          src="https://www.aljazeera.com/wp-content/uploads/2020/06/INTERACTIVE-INDIA-CHINA-BORDER-DISPUTE-JUNE17-2020.png"
          alt="India-China Border Dispute"
          style={{ width: '100%', borderRadius: '1rem', margin: '1rem 0' }}
        />
        <p>
          The India-China border dispute is one of the most significant and
          long-standing territorial conflicts in South Asia. This dispute has
          not only strained bilateral relations but also poses a serious threat
          to the regional security and stability of South Asia. The Line of
          Actual Control (LAC) remains a contentious and militarized boundary,
          with frequent skirmishes and political standoffs.
        </p>
      </section>

      <section>
        <h2>Historical Background</h2>
        <img
          src="https://www.aljazeera.com/wp-content/uploads/2020/06/INTERACTIVE-INDIA-CHINA-BORDER-DISPUTE-JUNE17-2020.png"
          alt="Map of Sino-Indian War 1962"
          style={{ width: '100%', borderRadius: '1rem', margin: '1rem 0' }}
        />
        <p>
          The origins of the India-China border conflict date back to the
          colonial era, with differing interpretations of border agreements and
          treaties. The 1962 Sino-Indian War further deepened the divide, and
          despite numerous diplomatic efforts, the conflict remains unresolved.
        </p>
      </section>

      <section>
        <h2>Impact on Regional Security</h2>
        <img
          src="https://www.aljazeera.com/wp-content/uploads/2020/06/INTERACTIVE-INDIA-CHINA-BORDER-DISPUTE-JUNE17-2020.png"
          alt="South Asia Security Map"
          style={{ width: '100%', borderRadius: '1rem', margin: '1rem 0' }}
        />
        <p>
          This border dispute has broader implications for South Asian security.
          The militarization of the LAC increases the risk of conflict
          escalation, drawing in neighboring countries and external powers. It
          also diverts resources from economic development to defense spending,
          hampering regional growth and cooperation.
        </p>
      </section>

      <section>
        <h2>Conclusion</h2>
        <img
          src="https://www.aljazeera.com/wp-content/uploads/2020/06/INTERACTIVE-INDIA-CHINA-BORDER-DISPUTE-JUNE17-2020.png"
          alt="India-China Peace Talks"
          style={{ width: '100%', borderRadius: '1rem', margin: '1rem 0' }}
        />
        <p>
          Resolving the India-China border dispute is essential for ensuring
          lasting peace and stability in South Asia. Diplomatic engagement,
          mutual respect for territorial integrity, and adherence to
          international law are crucial steps toward conflict resolution.
        </p>
      </section>
        <br/>
        <br/>
        <hr/>
        <Footbar />
    </div>
  );
}

export default IndoPak;
