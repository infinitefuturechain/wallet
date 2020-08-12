const en = {
  global: {
    app: 'IFBox',
    next: 'Next',
    back: 'Back',
    search: 'Search',
    confirm: 'Confirm',
    finish: 'Finish',
    ok: 'Ok',
    cancel: 'Cancel',
    error: 'Error',
    required: '{name} is required',
    success: '{name} Success!',
    noData: 'No data available for the time being',
    noData1: 'No Data',
    no: 'No',
    nothing: '-',
    yes: 'Yes',
    errorType: 'Wrong {name}',
    view: 'view',
    null: 'No Rewards',
    null2: 'No Assets',
    Insufficient: 'Gas Fee Insufficient',
    entryError: 'Entry Error'
  },
  home: {
    title: 'Manage your IFBox Assets',
    banner: 'Security, Stability and Open Source',
    itemTitle1: 'Safety and reliability',
    itemText1: 'Your private key is stored locally and protected multiple times. We will never access your private information. Auxiliaries are encrypted with up to 24 mnemonic words in the industry.',
    itemTitle2: 'Stability and Open Source',
    itemText2: 'Our wallet code has been open source on Github, and we hope that community developers can work together to develop our wallets. You can also download our code for private deployment.',
    itemTitle3: 'Convenience and ease of use',
    itemText3: 'IFBox is a light wallet for multilingual web pages. You can use your wallet anytime, anywhere for issuance, payment and other operations.',
    itemTitle4: 'Concealment and protection',
    itemText4: 'The IFBox wallet will not collect any information about you, nor will token disclose any personal information about you using the critical IFBox network.',
    account: 'Wallet Account',
    staking: 'Staking Delegation',
    issue: 'Token Issuances',
    deposit: 'DepositBox',
    future: 'FutureBox',
    create: 'Create Your Wallet',
    wallet: 'Wallet',
    dapp: 'Dapp Store'
  },
  agree: {
    title: 'Terms & Conditions',
    term1: 'I understand that my funds are stored securely on my personal computer. No private data is sent to IFBox servers. All encryption is done locally in browser.',
    term2: 'I consent that IFBox does not have access to my private information and could not participate in resolution of issues concerning money loss of any kind.',
    term3: 'I have read and accepted the ',
    use: 'Terms of Use',
    and: 'and',
    privacy: 'Privacy Policy',
    termUrl: 'http://hashgard-io.oss-cn-hongkong.aliyuncs.com/terms/HashgardTermsofService.pdf',
    privacyUrl: 'http://hashgard-io.oss-cn-hongkong.aliyuncs.com/terms/GardBoxPrivacyPolicy.pdf',
    confirm: 'Confirm and Continue'
  },
  passport: {
    title: 'Create a new key pair or import an existing wallet to get started',
    banner: 'IFBox is a free, open source web wallet. Users can use IF wallet to create or import wallet, and use IF token to complete a series of operations on IFBox Blockchain.',
    create: 'Create New Wallet',
    createBreif: "Create a new wallet to manage IFBox's network assets.",
    login: 'Wallet Switch',
    loginBreif: 'Use wallet with your password if you already have one in this browser.',
    logout: 'Log Out',
    backup: 'Export KeyStore',
    privateKey: 'Export PrivateKey',
    backupCopy: 'Copy KeyStore to clipboard',
    backupFile: 'download KeyStore file',
    edit: 'Edit Name',
    delete: 'Delete Wallet',
    deleteWarn: 'All user data, including imported or generated private keys, will be deleted. The only way to restore a deleted wallet is to use your backup phrase.',
    recover: 'Import Wallet',
    recoverBreif: "Import existing wallets to manage IFBox's network assets.",
    math: 'Math Wallet',
    useMath: 'Use Math Wallet',
    switchWallet: 'Switch Wallet',
    backups: "Backup, click on me to verify",
    network: 'Switching to different IFBox networks'
  },
  create: {
    warn1: 'Password Users Protect Your Private Key and Authorized Transactions. Keep it safe!!!',
    warn2: 'IFBox does not store your password and cannot retrieve it for you!',
    name: 'Wallet Name',
    nameLength: 'Name length should not exceed 12',
    pass: 'Password',
    passCheck: 'Confirm Password',
    passWarn: 'Password must contain numbers and letters and at least 8 characters!',
    passCheckWarn: 'Inconsistent password!',
    exist: 'Account Name Exist!',
    mnemonic: 'Your Mnemonic',
    mnemonicWarn: 'Wrong Mnemonic!',
    safety: 'Backup Your Mnemonic',
    mnemonicBreif: 'Copy your wallet mnemonic and keep it where only you know it.Mnemonics are used to restore or reset wallet passwords.',
    reset: 'Reset',
    confirm: 'Confirm your Mnemonic',
    backup: 'Do you remove the mnemonic from IFBox wallet?',
    success: 'Wallet Created Successfully!',
    clickCopy: 'Copy',
    mnemonicConfirm: 'Mnemonic Confirm',
    mnemonicInfo: 'Please fill in the input with "I have copied and saved the mnemonics"',
    mnemonicInfo2: 'I have copied and saved the mnemonics'
  },
  recover: {
    key: 'KeyStore Text',
    keyFile: 'KeyStore File',
    drag: 'Drag KeyStore file here, or ',
    click: 'click to upload',
    phrase: 'Mnemonic',
    keyError: 'Wrong KeyStore!'
  },
  main: {
    receive: 'Receive',
    deposit: 'Deposit',
    qrcode: 'QRCode',
    send: 'Transfer',
    manage: 'Manage',
    copy: 'Copied to ClipBoard',
    assets: 'My Assets',
    txs: 'Transactions',
    txInfo: 'Transaction Detail',
    allTxs: 'Expolor All Txs',
    empty: 'No Data',
    keyWarn: 'KeyStore is an encrypted JSON file with your privateKey and password, you can get your privateKey with your password from it.',
    voucher: 'Voucher',
    takeBack: 'Please take it back',
    transaction: 'Send',
    draw: 'Draw IF',
    AdequateBalance: 'Adequate Balance',
    seconds: '30 seconds later',
    box: 'Box',
    delegate: 'Delegate',
    manage: 'Manage',
    copy: 'copy',
    coinType: 'Token Type',
    available: 'Available Balance',
    frozen: 'Frozen',
    operation: 'Operation',
    migrate: 'Migrate'
  },
  send: {
    form: 'Transfer',
    confirm: 'Confirm Transaction',
    passError: 'Wrong Password!',
    reject: 'Signature Rejected',
    netError: 'Network Error',
    finish: 'Transaction Result',
    denom: 'Currency',
    amount: 'Amount',
    amountWarn: 'Insufficient Quantity',
    amountWarnPositive: 'A Positive Number is required',
    amountWarnInvalid: 'Invalid Amount',
    address: 'Address',
    addressWarn: 'Invalid Address!',
    sender: 'Sender',
    memo: 'Memo',
    txHash: 'TxHash',
    all: 'Send All',
    balance: 'Balance',
    fee: 'Gas Fee',
    error: 'Transaction Error!',
    again: 'Continue Transfer',
    back: 'Back to Wallet',
    block: 'Block',
    time: 'Time',
    codeMessage1: 'This two-dimensional code only supports IFBox network assets transfer, but does not support other virtual currency assets for the time being.',
    codeMessage2: 'Please confirm the asset attributes when you roll in. Other virtual currency assets will not be recovered if they rush in.'
  },
  staking: {
    delegationTotal: 'Total Delegations',
    reward: 'Delegation Rewards',
    withdraw: 'Withdraw Rewards',
    withdrawAll: 'One Click Withdraw Rewards',
    delegate: 'Delegate IF',
    delegations: 'My Stakings',
    validators: 'All Validators',
    tokensMax: 'Max Tokens',
    commissionMin: 'Lowest Commission',
    fromValidator: 'From Validator Node',
    toValidator: 'To Validator Node',
    validator: 'Validator Node',
    name: 'Validator Name',
    status: 'Status',
    active: 'Active',
    candidate: 'Candidate',
    jailed: 'Jailed',
    minSelf: 'Min Self Delegation',
    address: 'Address',
    detail: 'Delegation Detail',
    tokens: 'Tokens',
    commission: 'Commission',
    max: 'Commission Max',
    commissionChange: 'Commission Change Rate Max',
    website: 'Website',
    description: 'Description',
    all: 'Delegate All',
    unbind: 'Unbind',
    unbindAll: 'Unbind All',
    redelegate: 'Redelegate',
    redelegateAll: 'Redelegate All',
    validatorDup: 'Target Validator Invalid',
    unbinding: 'Unbindings',
    delegated: 'Delegated',
    unpaidReward: 'Unpaid Reward'
  },
  singleTokenAssets: {
    available: 'Available',
    lock: 'Lock'
  },
  receiveVoucher: {
    extract: 'Extract'
  },
  owner: {
    brif: 'Transfer ownership to other address is DANGEROUS！You will see no more this Token in your Token Issuance List once transfered!',
    from: 'Token Owner'
  },
  footer: {
    copyright: '© 2020 IFBox Foundation Ltd. All Rights Reserved.'
  },
  redelegate: {
    my: 'My Redelegations',
    amount: 'Amount',
    validatorFrom: 'Validator From',
    validatorTo: 'Validator To',
    completionTime: 'Completion Time',
    block: 'Block Height',
    detail: 'Redelegation Detail'
  },
  myNode: {
    myNode: 'My Validators',
    name: 'Validator Name',
    comissionRate: 'Comission Rate',
    address: 'Operator Address',
    time: 'Update Time',
    info: 'Validator Info',
    state: 'State',
    delegate: 'Total Delegation',
    comissionMax: 'Comission Max Rate',
    comissionMaxChange: 'Comission Max Change Rate',
    website: 'Website',
    details: 'Details',
    withdraw: 'Withdraw Address',
    rewards: 'Rewards',
    commission: 'Commission',
    setWithdraw: 'Set Withdraw Address',
    set: 'Set'
  }
};
export default en;