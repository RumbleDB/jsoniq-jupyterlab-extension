// Generated from ./src/grammar/jsoniq.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ModuleAndThisIsItContext } from "./jsoniqParser";
import { ModuleContext } from "./jsoniqParser";
import { MainModuleContext } from "./jsoniqParser";
import { LibraryModuleContext } from "./jsoniqParser";
import { PrologContext } from "./jsoniqParser";
import { ProgramContext } from "./jsoniqParser";
import { StatementsContext } from "./jsoniqParser";
import { StatementsAndExprContext } from "./jsoniqParser";
import { StatementsAndOptionalExprContext } from "./jsoniqParser";
import { StatementContext } from "./jsoniqParser";
import { ApplyStatementContext } from "./jsoniqParser";
import { AssignStatementContext } from "./jsoniqParser";
import { BlockStatementContext } from "./jsoniqParser";
import { BreakStatementContext } from "./jsoniqParser";
import { ContinueStatementContext } from "./jsoniqParser";
import { ExitStatementContext } from "./jsoniqParser";
import { FlowrStatementContext } from "./jsoniqParser";
import { IfStatementContext } from "./jsoniqParser";
import { SwitchStatementContext } from "./jsoniqParser";
import { SwitchCaseStatementContext } from "./jsoniqParser";
import { TryCatchStatementContext } from "./jsoniqParser";
import { CatchCaseStatementContext } from "./jsoniqParser";
import { TypeSwitchStatementContext } from "./jsoniqParser";
import { CaseStatementContext } from "./jsoniqParser";
import { AnnotationContext } from "./jsoniqParser";
import { AnnotationsContext } from "./jsoniqParser";
import { VarDeclStatementContext } from "./jsoniqParser";
import { VarDeclForStatementContext } from "./jsoniqParser";
import { WhileStatementContext } from "./jsoniqParser";
import { SetterContext } from "./jsoniqParser";
import { NamespaceDeclContext } from "./jsoniqParser";
import { AnnotatedDeclContext } from "./jsoniqParser";
import { DefaultCollationDeclContext } from "./jsoniqParser";
import { OrderingModeDeclContext } from "./jsoniqParser";
import { EmptyOrderDeclContext } from "./jsoniqParser";
import { DecimalFormatDeclContext } from "./jsoniqParser";
import { QnameContext } from "./jsoniqParser";
import { DfPropertyNameContext } from "./jsoniqParser";
import { ModuleImportContext } from "./jsoniqParser";
import { VarDeclContext } from "./jsoniqParser";
import { ContextItemDeclContext } from "./jsoniqParser";
import { FunctionDeclContext } from "./jsoniqParser";
import { TypeDeclContext } from "./jsoniqParser";
import { SchemaLanguageContext } from "./jsoniqParser";
import { ParamListContext } from "./jsoniqParser";
import { ParamContext } from "./jsoniqParser";
import { ExprContext } from "./jsoniqParser";
import { ExprSingleContext } from "./jsoniqParser";
import { ExprSimpleContext } from "./jsoniqParser";
import { FlowrExprContext } from "./jsoniqParser";
import { ForClauseContext } from "./jsoniqParser";
import { ForVarContext } from "./jsoniqParser";
import { LetClauseContext } from "./jsoniqParser";
import { LetVarContext } from "./jsoniqParser";
import { WhereClauseContext } from "./jsoniqParser";
import { GroupByClauseContext } from "./jsoniqParser";
import { GroupByVarContext } from "./jsoniqParser";
import { OrderByClauseContext } from "./jsoniqParser";
import { OrderByExprContext } from "./jsoniqParser";
import { CountClauseContext } from "./jsoniqParser";
import { QuantifiedExprContext } from "./jsoniqParser";
import { QuantifiedExprVarContext } from "./jsoniqParser";
import { SwitchExprContext } from "./jsoniqParser";
import { SwitchCaseClauseContext } from "./jsoniqParser";
import { TypeSwitchExprContext } from "./jsoniqParser";
import { CaseClauseContext } from "./jsoniqParser";
import { IfExprContext } from "./jsoniqParser";
import { TryCatchExprContext } from "./jsoniqParser";
import { CatchClauseContext } from "./jsoniqParser";
import { OrExprContext } from "./jsoniqParser";
import { AndExprContext } from "./jsoniqParser";
import { NotExprContext } from "./jsoniqParser";
import { ComparisonExprContext } from "./jsoniqParser";
import { StringConcatExprContext } from "./jsoniqParser";
import { RangeExprContext } from "./jsoniqParser";
import { AdditiveExprContext } from "./jsoniqParser";
import { MultiplicativeExprContext } from "./jsoniqParser";
import { InstanceOfExprContext } from "./jsoniqParser";
import { IsStaticallyExprContext } from "./jsoniqParser";
import { TreatExprContext } from "./jsoniqParser";
import { CastableExprContext } from "./jsoniqParser";
import { CastExprContext } from "./jsoniqParser";
import { ArrowExprContext } from "./jsoniqParser";
import { ArrowFunctionSpecifierContext } from "./jsoniqParser";
import { UnaryExprContext } from "./jsoniqParser";
import { ValueExprContext } from "./jsoniqParser";
import { ValidateExprContext } from "./jsoniqParser";
import { AnnotateExprContext } from "./jsoniqParser";
import { SimpleMapExprContext } from "./jsoniqParser";
import { PostFixExprContext } from "./jsoniqParser";
import { ArrayLookupContext } from "./jsoniqParser";
import { ArrayUnboxingContext } from "./jsoniqParser";
import { PredicateContext } from "./jsoniqParser";
import { ObjectLookupContext } from "./jsoniqParser";
import { PrimaryExprContext } from "./jsoniqParser";
import { BlockExprContext } from "./jsoniqParser";
import { VarRefContext } from "./jsoniqParser";
import { ParenthesizedExprContext } from "./jsoniqParser";
import { ContextItemExprContext } from "./jsoniqParser";
import { OrderedExprContext } from "./jsoniqParser";
import { UnorderedExprContext } from "./jsoniqParser";
import { FunctionCallContext } from "./jsoniqParser";
import { ArgumentListContext } from "./jsoniqParser";
import { ArgumentContext } from "./jsoniqParser";
import { FunctionItemExprContext } from "./jsoniqParser";
import { NamedFunctionRefContext } from "./jsoniqParser";
import { InlineFunctionExprContext } from "./jsoniqParser";
import { InsertExprContext } from "./jsoniqParser";
import { DeleteExprContext } from "./jsoniqParser";
import { RenameExprContext } from "./jsoniqParser";
import { ReplaceExprContext } from "./jsoniqParser";
import { TransformExprContext } from "./jsoniqParser";
import { AppendExprContext } from "./jsoniqParser";
import { UpdateLocatorContext } from "./jsoniqParser";
import { CopyDeclContext } from "./jsoniqParser";
import { SequenceTypeContext } from "./jsoniqParser";
import { ObjectConstructorContext } from "./jsoniqParser";
import { ItemTypeContext } from "./jsoniqParser";
import { FunctionTestContext } from "./jsoniqParser";
import { AnyFunctionTestContext } from "./jsoniqParser";
import { TypedFunctionTestContext } from "./jsoniqParser";
import { SingleTypeContext } from "./jsoniqParser";
import { PairConstructorContext } from "./jsoniqParser";
import { ArrayConstructorContext } from "./jsoniqParser";
import { UriLiteralContext } from "./jsoniqParser";
import { StringLiteralContext } from "./jsoniqParser";
import { KeyWordsContext } from "./jsoniqParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `jsoniqParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface jsoniqVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `jsoniqParser.moduleAndThisIsIt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleAndThisIsIt?: (ctx: ModuleAndThisIsItContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.module`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModule?: (ctx: ModuleContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.mainModule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMainModule?: (ctx: MainModuleContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.libraryModule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLibraryModule?: (ctx: LibraryModuleContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.prolog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProlog?: (ctx: PrologContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.statements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatements?: (ctx: StatementsContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.statementsAndExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementsAndExpr?: (ctx: StatementsAndExprContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.statementsAndOptionalExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementsAndOptionalExpr?: (ctx: StatementsAndOptionalExprContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.applyStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitApplyStatement?: (ctx: ApplyStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.assignStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignStatement?: (ctx: AssignStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.blockStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockStatement?: (ctx: BlockStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.breakStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreakStatement?: (ctx: BreakStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.continueStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContinueStatement?: (ctx: ContinueStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.exitStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExitStatement?: (ctx: ExitStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.flowrStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlowrStatement?: (ctx: FlowrStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.ifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.switchStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchStatement?: (ctx: SwitchStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.switchCaseStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchCaseStatement?: (ctx: SwitchCaseStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.tryCatchStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTryCatchStatement?: (ctx: TryCatchStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.catchCaseStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatchCaseStatement?: (ctx: CatchCaseStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.typeSwitchStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeSwitchStatement?: (ctx: TypeSwitchStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.caseStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseStatement?: (ctx: CaseStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.annotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation?: (ctx: AnnotationContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.annotations`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotations?: (ctx: AnnotationsContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.varDeclStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarDeclStatement?: (ctx: VarDeclStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.varDeclForStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarDeclForStatement?: (ctx: VarDeclForStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.whileStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStatement?: (ctx: WhileStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.setter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetter?: (ctx: SetterContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.namespaceDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamespaceDecl?: (ctx: NamespaceDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.annotatedDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotatedDecl?: (ctx: AnnotatedDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.defaultCollationDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultCollationDecl?: (ctx: DefaultCollationDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.orderingModeDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrderingModeDecl?: (ctx: OrderingModeDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.emptyOrderDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyOrderDecl?: (ctx: EmptyOrderDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.decimalFormatDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecimalFormatDecl?: (ctx: DecimalFormatDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.qname`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQname?: (ctx: QnameContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.dfPropertyName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDfPropertyName?: (ctx: DfPropertyNameContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.moduleImport`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleImport?: (ctx: ModuleImportContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.varDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarDecl?: (ctx: VarDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.contextItemDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContextItemDecl?: (ctx: ContextItemDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.functionDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDecl?: (ctx: FunctionDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.typeDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDecl?: (ctx: TypeDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.schemaLanguage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchemaLanguage?: (ctx: SchemaLanguageContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.paramList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParamList?: (ctx: ParamListContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.param`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParam?: (ctx: ParamContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.exprSingle`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprSingle?: (ctx: ExprSingleContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.exprSimple`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprSimple?: (ctx: ExprSimpleContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.flowrExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlowrExpr?: (ctx: FlowrExprContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.forClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForClause?: (ctx: ForClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.forVar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForVar?: (ctx: ForVarContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.letClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLetClause?: (ctx: LetClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.letVar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLetVar?: (ctx: LetVarContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.whereClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhereClause?: (ctx: WhereClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.groupByClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupByClause?: (ctx: GroupByClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.groupByVar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupByVar?: (ctx: GroupByVarContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.orderByClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrderByClause?: (ctx: OrderByClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.orderByExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrderByExpr?: (ctx: OrderByExprContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.countClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCountClause?: (ctx: CountClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.quantifiedExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuantifiedExpr?: (ctx: QuantifiedExprContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.quantifiedExprVar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuantifiedExprVar?: (ctx: QuantifiedExprVarContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.switchExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchExpr?: (ctx: SwitchExprContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.switchCaseClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchCaseClause?: (ctx: SwitchCaseClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.typeSwitchExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeSwitchExpr?: (ctx: TypeSwitchExprContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.caseClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseClause?: (ctx: CaseClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.ifExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfExpr?: (ctx: IfExprContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.tryCatchExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTryCatchExpr?: (ctx: TryCatchExprContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.catchClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatchClause?: (ctx: CatchClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.orExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrExpr?: (ctx: OrExprContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.andExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAndExpr?: (ctx: AndExprContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.notExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotExpr?: (ctx: NotExprContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.comparisonExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisonExpr?: (ctx: ComparisonExprContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.stringConcatExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringConcatExpr?: (ctx: StringConcatExprContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.rangeExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRangeExpr?: (ctx: RangeExprContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.additiveExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditiveExpr?: (ctx: AdditiveExprContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.multiplicativeExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeExpr?: (ctx: MultiplicativeExprContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.instanceOfExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstanceOfExpr?: (ctx: InstanceOfExprContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.isStaticallyExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIsStaticallyExpr?: (ctx: IsStaticallyExprContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.treatExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTreatExpr?: (ctx: TreatExprContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.castableExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCastableExpr?: (ctx: CastableExprContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.castExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCastExpr?: (ctx: CastExprContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.arrowExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrowExpr?: (ctx: ArrowExprContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.arrowFunctionSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrowFunctionSpecifier?: (ctx: ArrowFunctionSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.unaryExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryExpr?: (ctx: UnaryExprContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.valueExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueExpr?: (ctx: ValueExprContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.validateExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValidateExpr?: (ctx: ValidateExprContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.annotateExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotateExpr?: (ctx: AnnotateExprContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.simpleMapExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleMapExpr?: (ctx: SimpleMapExprContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.postFixExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostFixExpr?: (ctx: PostFixExprContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.arrayLookup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayLookup?: (ctx: ArrayLookupContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.arrayUnboxing`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayUnboxing?: (ctx: ArrayUnboxingContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicate?: (ctx: PredicateContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.objectLookup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectLookup?: (ctx: ObjectLookupContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.primaryExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryExpr?: (ctx: PrimaryExprContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.blockExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockExpr?: (ctx: BlockExprContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.varRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarRef?: (ctx: VarRefContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.parenthesizedExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesizedExpr?: (ctx: ParenthesizedExprContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.contextItemExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContextItemExpr?: (ctx: ContextItemExprContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.orderedExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrderedExpr?: (ctx: OrderedExprContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.unorderedExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnorderedExpr?: (ctx: UnorderedExprContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.argumentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentList?: (ctx: ArgumentListContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.argument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgument?: (ctx: ArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.functionItemExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionItemExpr?: (ctx: FunctionItemExprContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.namedFunctionRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedFunctionRef?: (ctx: NamedFunctionRefContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.inlineFunctionExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInlineFunctionExpr?: (ctx: InlineFunctionExprContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.insertExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInsertExpr?: (ctx: InsertExprContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.deleteExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeleteExpr?: (ctx: DeleteExprContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.renameExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRenameExpr?: (ctx: RenameExprContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.replaceExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReplaceExpr?: (ctx: ReplaceExprContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.transformExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransformExpr?: (ctx: TransformExprContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.appendExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAppendExpr?: (ctx: AppendExprContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.updateLocator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpdateLocator?: (ctx: UpdateLocatorContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.copyDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCopyDecl?: (ctx: CopyDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.sequenceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSequenceType?: (ctx: SequenceTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.objectConstructor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectConstructor?: (ctx: ObjectConstructorContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.itemType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitItemType?: (ctx: ItemTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.functionTest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionTest?: (ctx: FunctionTestContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.anyFunctionTest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnyFunctionTest?: (ctx: AnyFunctionTestContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.typedFunctionTest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypedFunctionTest?: (ctx: TypedFunctionTestContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.singleType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleType?: (ctx: SingleTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.pairConstructor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPairConstructor?: (ctx: PairConstructorContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.arrayConstructor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayConstructor?: (ctx: ArrayConstructorContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.uriLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUriLiteral?: (ctx: UriLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.stringLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteral?: (ctx: StringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `jsoniqParser.keyWords`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyWords?: (ctx: KeyWordsContext) => Result;
}

