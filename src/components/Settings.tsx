import React from 'react';

interface SettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

const styles = {
  overlay: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '80px 16px',
    zIndex: 2000,
  },
  container: {
    width: '100%',
    maxWidth: '480px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '20px',
    position: 'relative' as const,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold' as const,
    margin: 0,
  },
  closeButton: {
    background: 'none',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
    padding: '4px',
  },
  section: {
    marginBottom: '24px',
  },
  sectionTitle: {
    fontSize: '18px',
    fontWeight: 'bold' as const,
    marginBottom: '12px',
  },
  option: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 0',
    borderBottom: '1px solid #eee',
  },
  optionLabel: {
    fontSize: '16px',
  },
};

const Settings: React.FC<SettingsProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.container} onClick={e => e.stopPropagation()}>
        <div style={styles.header}>
          <h2 style={styles.title}>Settings</h2>
          <button style={styles.closeButton} onClick={onClose}>×</button>
        </div>

        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Account</h3>
          <div style={styles.option}>
            <span style={styles.optionLabel}>Notifications</span>
            <input type="checkbox" defaultChecked />
          </div>
          <div style={styles.option}>
            <span style={styles.optionLabel}>Dark Mode</span>
            <input type="checkbox" />
          </div>
        </div>

        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Budget Settings</h3>
          <div style={styles.option}>
            <span style={styles.optionLabel}>Monthly Reset</span>
            <input type="checkbox" defaultChecked />
          </div>
          <div style={styles.option}>
            <span style={styles.optionLabel}>Budget Alerts</span>
            <input type="checkbox" defaultChecked />
          </div>
        </div>

        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Display</h3>
          <div style={styles.option}>
            <span style={styles.optionLabel}>Currency</span>
            <select defaultValue="USD">
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="GBP">GBP (£)</option>
            </select>
          </div>
          <div style={styles.option}>
            <span style={styles.optionLabel}>Date Format</span>
            <select defaultValue="MM/DD/YYYY">
              <option value="MM/DD/YYYY">MM/DD/YYYY</option>
              <option value="DD/MM/YYYY">DD/MM/YYYY</option>
              <option value="YYYY-MM-DD">YYYY-MM-DD</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;