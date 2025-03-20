import React, { useState } from 'react';

          interface Account {
            id: number;
            bankName: string;
          }

          const styles = {
            section: {
              marginBottom: '24px',
            },
            sectionTitle: {
              fontSize: '18px',
              fontWeight: 'bold' as const,
              marginBottom: '16px',
              color: '#333',
              textAlign: 'left' as const,
            },
            accountItem: {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px 0',
              borderBottom: '1px solid #eee',
            },
            input: {
              width: '90%',
              padding: '10px',
              fontSize: '16px',
              borderRadius: '8px',
              border: '1px solid #ddd',
              marginBottom: '10px',
            },
            button: {
              padding: '10px 20px',
              fontSize: '16px',
              color: '#fff',
              backgroundColor: '#32BC9B',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginBottom: '20px',
              marginTop: '10px',
              float: 'left' as const,
            },
            editButton: {
              background: 'none',
              border: 'none',
              color: '#FF784B',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: '8px',
              fontSize: '14px',
              transition: 'background-color 0.2s',
            },
          };

          const LinkedAccounts: React.FC = () => {
            const [accounts, setAccounts] = useState<Account[]>([]);
            const [bankName, setBankName] = useState('');
            const [editingAccount, setEditingAccount] = useState<Account | null>(null);

            const handleAddAccount = () => {
              if (editingAccount) {
                setAccounts(accounts.map(acc => acc.id === editingAccount.id ? { ...acc, bankName } : acc));
                setEditingAccount(null);
              } else {
                setAccounts([...accounts, { id: Date.now(), bankName }]);
              }
              setBankName('');
            };

            const handleEditAccount = (account: Account) => {
              setBankName(account.bankName);
              setEditingAccount(account);
            };

            const handleDeleteAccount = (accountId: number) => {
              setAccounts(accounts.filter(acc => acc.id !== accountId));
            };

            return (
              <div style={styles.section}>
                <h3 style={styles.sectionTitle}>Linked Accounts</h3>
                <input
                  type="text"
                  placeholder="Bank Name"
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)}
                  style={styles.input}
                />
                <button onClick={handleAddAccount} style={styles.button}>
                  Manage
                </button>
                {accounts.map(account => (
                  <div key={account.id} style={styles.accountItem}>
                    <div>{account.bankName}</div>
                    <div>
                      <button onClick={() => handleEditAccount(account)} style={styles.editButton}>Edit</button>
                      <button onClick={() => handleDeleteAccount(account.id)} style={styles.editButton}>Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            );
          };

          export default LinkedAccounts;
